import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcfwjek6q.css';
import '../../css/z/z0zaodwrd.css';
import '../../css/g/gnnet6bqv.css';
import '../../css/k/kbui5dq_n.css';
import '../../css/v/vkacibc-q.css';
import '../../css/z/zc-yl53ga.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qcfwjek6q"/><path class="z0zaodwrd"/><path class="gnnet6bqv"/><path clip-rule="evenodd" class="kbui5dq_n"/><path class="vkacibc-q"/><path class="zc-yl53ga"/></g>`,
		"fallback": "glyphs:volume-2-outline",
	});
}

export default Component;
