import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlcn24b2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlcn24b2o"/>`,
		"fallback": "selfhst:libretranslate-light",
	});
}

export default Component;
