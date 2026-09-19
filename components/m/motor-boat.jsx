import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht-n9hb4a.css';
import '../../css/p/pzb_m7bfd.css';
import '../../css/j/je-0lmbbj.css';
import '../../css/z/zzzys-r3j.css';
import '../../css/d/dt3hizy-v.css';
import '../../css/s/st53awbpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ht-n9hb4a"/><path class="pzb_m7bfd"/><path class="je-0lmbbj"/><path class="zzzys-r3j"/><path class="dt3hizy-v"/><path class="st53awbpp"/></g>`,
		"fallback": "fluent-emoji-flat:motor-boat",
	});
}

export default Component;
