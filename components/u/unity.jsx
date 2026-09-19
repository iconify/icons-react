import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/czmlrnchy.css';
import '../../css/b/bxbmi0nho.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="czmlrnchy"/><path class="bxbmi0nho"/></g>`,
		"fallback": "cryptocurrency:unity",
	});
}

export default Component;
