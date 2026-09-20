import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjvq-5bzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjvq-5bzg"/>`,
		"fallback": "selfhst:ticktick-light",
	});
}

export default Component;
