import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c3l_2jbrp.css';
import '../../css/w/wtucnzbjo.css';

const viewBox = {"width":544,"height":540,"left":-32,"top":-79};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c3l_2jbrp"/><path class="wtucnzbjo"/></g>`,
		"fallback": "thesvg:monitixx",
	});
}

export default Component;
