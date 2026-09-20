import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pum4gmbjz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pum4gmbjz"/>`,
		"fallback": "selfhst:lunalytics-light",
	});
}

export default Component;
