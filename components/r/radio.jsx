import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z0bc_fbzy.css';
import '../../css/q/q3ejie-nn.css';
import '../../css/l/l2uwf7bam.css';
import '../../css/j/jnx6lfl8y.css';
import '../../css/u/uo_i2ybma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="z0bc_fbzy"/><path class="q3ejie-nn wm-shine"/><path class="l2uwf7bam wm-k"/><path class="jnx6lfl8y wm-a"/><path class="uo_i2ybma wm-deco"/></g>`,
		"fallback": "withicons-kawaii:radio",
	});
}

export default Component;
