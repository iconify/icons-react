import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxmbbbc3u.css';
import '../../css/q/qzuulfbuk.css';

const viewBox = {"width":77.8,"height":46.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1.292)scale(3.69565)" class="cuyn6tgcc"><path class="rxmbbbc3u"/><circle class="qzuulfbuk"/></g>`,
		"fallback": "thesvg:monday",
	});
}

export default Component;
