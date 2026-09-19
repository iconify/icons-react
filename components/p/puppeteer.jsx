import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozeyqcctf.css';
import '../../css/p/paymb2lad.css';
import '../../css/f/fmnfphbvx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozeyqcctf"/><path class="paymb2lad"/><path class="fmnfphbvx"/>`,
		"fallback": "catppuccin:puppeteer",
	});
}

export default Component;
