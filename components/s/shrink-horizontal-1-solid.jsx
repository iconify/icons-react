import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cevem_bkk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cevem_bkk"/>`,
		"fallback": "streamline:shrink-horizontal-1-solid",
	});
}

export default Component;
