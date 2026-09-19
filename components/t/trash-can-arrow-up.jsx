import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmgly0bog.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmgly0bog"/>`,
		"fallback": "fa7-solid:trash-can-arrow-up",
	});
}

export default Component;
