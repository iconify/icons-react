import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb3519b9h.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb3519b9h"/>`,
		"fallback": "f7:number-square",
	});
}

export default Component;
