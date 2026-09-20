import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0e4rvbbj.css';
import '../../css/e/etr8rqb5s.css';
import '../../css/w/wqgkgyc2m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o0e4rvbbj"/><path class="etr8rqb5s"/><path class="wqgkgyc2m"/></g>`,
		"fallback": "streamline-color:water-glass",
	});
}

export default Component;
