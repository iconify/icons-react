import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmjbcrbtz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmjbcrbtz"/>`,
		"fallback": "f7:text-badge-star",
	});
}

export default Component;
