import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c-rfm8swt.css';
import '../../css/j/jhvx0lqij.css';
import '../../css/o/odu1j3rcb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c-rfm8swt"/><path class="jhvx0lqij"/><path class="odu1j3rcb"/></g>`,
		"fallback": "streamline-memes:thug-life-hand-drawn",
	});
}

export default Component;
