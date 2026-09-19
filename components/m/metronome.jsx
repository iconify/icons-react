import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zldcj7b5d.css';
import '../../css/t/tissekb1u.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zldcj7b5d"/><path class="tissekb1u"/></g>`,
		"fallback": "fad:metronome",
	});
}

export default Component;
