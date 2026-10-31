import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qbpz77bub.css';
import '../../css/u/u7ky2y4af.css';
import '../../css/u/u4bse819v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qbpz77bub"/><path class="u7ky2y4af wm-k"/><path class="u4bse819v wm-a"/></g>`,
		"fallback": "withicons-kawaii:puja-thali",
	});
}

export default Component;
