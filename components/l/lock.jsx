import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk_ksfbpw.css';

const viewBox = {"width":560,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk_ksfbpw"/>`,
		"fallback": "il:lock",
	});
}

export default Component;
