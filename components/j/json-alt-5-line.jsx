import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zthl079cl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zthl079cl"/>`,
		"fallback": "si:json-alt-5-line",
	});
}

export default Component;
