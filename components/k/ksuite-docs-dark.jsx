import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfg8lvbrj.css';
import '../../css/w/whb5utbty.css';
import '../../css/f/frxdtjj9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfg8lvbrj"/><path class="whb5utbty"/><path class="frxdtjj9s"/>`,
		"fallback": "selfhst:ksuite-docs-dark",
	});
}

export default Component;
