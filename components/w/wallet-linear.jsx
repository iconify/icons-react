import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/acmhcgbix.css';
import '../../css/z/z8j9m1bjy.css';
import '../../css/z/zz8f-y99b.css';
import '../../css/t/t2jvb6bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="acmhcgbix"/><path class="z8j9m1bjy"/><path class="zz8f-y99b"/><path class="t2jvb6bpe"/></g>`,
		"fallback": "solar:wallet-linear",
	});
}

export default Component;
