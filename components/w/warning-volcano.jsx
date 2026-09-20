import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awwca7hei.css';
import '../../css/i/iimglmldt.css';
import '../../css/d/dpzs_4b7z.css';
import '../../css/j/j6x1m2a-e.css';
import '../../css/z/z04drlb1l.css';
import '../../css/j/jcfo9rqpd.css';
import '../../css/d/da28zg6rf.css';
import '../../css/e/e4fgn8b4z.css';
import '../../css/x/xaim07bpf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awwca7hei"/><path class="iimglmldt"/><path class="dpzs_4b7z"/><path class="j6x1m2a-e"/><g class="z04drlb1l"><path class="jcfo9rqpd"/><path class="da28zg6rf"/><path class="e4fgn8b4z"/><path class="xaim07bpf"/></g>`,
		"fallback": "openmoji:warning-volcano",
	});
}

export default Component;
