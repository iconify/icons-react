import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4x_58bas.css';
import '../../css/h/hkiav7m0v.css';
import '../../css/i/i4zx9l7tm.css';
import '../../css/w/wjl8m50wr.css';
import '../../css/n/nnl-1qb-c.css';
import '../../css/d/diarpa7or.css';
import '../../css/q/qxkkiaczr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4x_58bas wm-shadow"/><path class="hkiav7m0v wm-k"/><path class="i4zx9l7tm wm-k"/><path class="wjl8m50wr wm-k"/><path class="nnl-1qb-c wm-k"/><path class="diarpa7or wm-k"/><path class="qxkkiaczr wm-shine"/>`,
		"fallback": "withicons-pastel:triangle",
	});
}

export default Component;
