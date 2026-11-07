import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6eyaewnx.css';
import '../../css/c/cr0ueab8d.css';
import '../../css/e/esa97-7_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j6eyaewnx"/><path class="cr0ueab8d"/><path class="esa97-7_d"/>`,
		"fallback": "solar:smart-speaker-bold",
	});
}

export default Component;
