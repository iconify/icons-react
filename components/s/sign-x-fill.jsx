import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmu0557rp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mmu0557rp"/>`,
		"fallback": "iconamoon:sign-x-fill",
	});
}

export default Component;
