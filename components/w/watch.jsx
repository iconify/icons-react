import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l-160pqjr.css';
import '../../css/z/zzvbegbls.css';
import '../../css/s/sxg01zbqn.css';
import '../../css/e/e_0o1rbfz.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l-160pqjr"/><path class="wm-shine zzvbegbls"/><path class="sxg01zbqn wm-k"/><path class="e_0o1rbfz wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:watch",
	});
}

export default Component;
