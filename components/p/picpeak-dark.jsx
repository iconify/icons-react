import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epy2y4b8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epy2y4b8w"/>`,
		"fallback": "selfhst:picpeak-dark",
	});
}

export default Component;
