import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f19hmrzcz.css';
import '../../css/q/qyetxgbje.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f19hmrzcz"/><path class="qyetxgbje"/></g>`,
		"fallback": "bi:vector-pen",
	});
}

export default Component;
