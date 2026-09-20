import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7vlg2bmk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7vlg2bmk"/>`,
		"fallback": "la:plane-arrival",
	});
}

export default Component;
