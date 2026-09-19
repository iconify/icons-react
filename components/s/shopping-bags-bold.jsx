import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kyuq34bfy.css';
import '../../css/e/evwboe5ze.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="kyuq34bfy"/><path class="evwboe5ze"/></g>`,
		"fallback": "glyphs:shopping-bags-bold",
	});
}

export default Component;
