import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w0pkh7mem.css';
import '../../css/g/g3l8fyc7a.css';
import '../../css/e/euw3jebyr.css';
import '../../css/l/l6swvrbfj.css';
import '../../css/l/lu-n5dblc.css';
import '../../css/r/rmvc8lmte.css';
import '../../css/g/g4ttz8ltw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="w0pkh7mem"/><path class="g3l8fyc7a"/><path class="euw3jebyr wm-shine"/><path class="l6swvrbfj"/><path class="lu-n5dblc"/><path class="rmvc8lmte"/><path class="g4ttz8ltw wm-shine"/></g>`,
		"fallback": "withicons-kawaii:play",
	});
}

export default Component;
