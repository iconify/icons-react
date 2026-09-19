import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qr_nd0b_z.css';
import '../../css/g/g3d0wwbtf.css';
import '../../css/q/q8ugq6w2c.css';
import '../../css/i/irl1o9bvn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qr_nd0b_z"/><path class="g3d0wwbtf"/><path class="q8ugq6w2c"/><path class="irl1o9bvn"/></g>`,
		"fallback": "icon-park-outline:safe-retrieval",
	});
}

export default Component;
