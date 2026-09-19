import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd7g7_byt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd7g7_byt"/>`,
		"fallback": "fa-solid:paint-roller",
	});
}

export default Component;
