import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7zn6jj7n.css';
import '../../css/x/xdo2lrbnh.css';
import '../../css/y/yuii19ldm.css';
import '../../css/n/n2lcrpbli.css';
import '../../css/i/i3cr3vbqz.css';
import '../../css/i/i61o1bp4y.css';
import '../../css/h/hf6j9lzbx.css';
import '../../css/w/w001sgbpm.css';
import '../../css/r/rvj7p7f_y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7zn6jj7n"/><path class="xdo2lrbnh"/><path class="yuii19ldm"/><path class="n2lcrpbli"/><path class="i3cr3vbqz"/><path class="i61o1bp4y"/><path class="hf6j9lzbx"/><path class="w001sgbpm"/><path class="rvj7p7f_y"/></g>`,
		"fallback": "fluent-emoji-flat:night-with-stars",
	});
}

export default Component;
