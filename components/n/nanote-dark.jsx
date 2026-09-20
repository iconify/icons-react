import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwy4c41lp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwy4c41lp"/>`,
		"fallback": "selfhst:nanote-dark",
	});
}

export default Component;
