import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywxwhvbxl.css';
import '../../css/v/vxnznebyd.css';
import '../../css/v/vphicrb1n.css';
import '../../css/j/j-axa9bgj.css';
import '../../css/m/mjlnl8bbu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ywxwhvbxl"/><path class="vxnznebyd"/><path class="vphicrb1n"/><path class="j-axa9bgj"/><path class="mjlnl8bbu"/></g>`,
		"fallback": "fluent-emoji-flat:level-slider",
	});
}

export default Component;
