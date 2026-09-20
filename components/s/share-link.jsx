import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nzs4edbok.css';
import '../../css/g/g9xrnlb8l.css';
import '../../css/f/fncg58bqn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nzs4edbok"/><path class="g9xrnlb8l"/><path class="fncg58bqn"/></g>`,
		"fallback": "streamline-flex-color:share-link",
	});
}

export default Component;
