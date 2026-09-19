import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jumt7_b_r.css';

const viewBox = {"width":242,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jumt7_b_r"/>`,
		"fallback": "file-icons:pawn",
	});
}

export default Component;
