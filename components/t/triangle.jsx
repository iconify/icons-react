import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p6wahxbgz.css';
import '../../css/q/qd1m3lmpc.css';
import '../../css/w/w900bojzk.css';
import '../../css/z/z2x9h7gyn.css';
import '../../css/o/ozmxtfq6v.css';
import '../../css/r/rs7ge8bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p6wahxbgz"/><path class="qd1m3lmpc"/><path class="w900bojzk wm-shine"/><path class="z2x9h7gyn"/><path class="ozmxtfq6v"/><path class="rs7ge8bth"/></g>`,
		"fallback": "withicons-kawaii:triangle",
	});
}

export default Component;
