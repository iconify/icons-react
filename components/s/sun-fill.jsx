import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zam0b_mmh.css';
import '../../css/i/i1d8z5cie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zam0b_mmh"/><path clip-rule="evenodd" class="i1d8z5cie"/>`,
		"fallback": "akar-icons:sun-fill",
	});
}

export default Component;
