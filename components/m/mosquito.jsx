import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o22w_qg5b.css';
import '../../css/g/gxzepe1nv.css';
import '../../css/s/s04hlrbua.css';
import '../../css/t/t56mc651a.css';
import '../../css/g/g_uyoe1hm.css';
import '../../css/m/m08bxwj7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o22w_qg5b"/><path class="gxzepe1nv"/><path class="s04hlrbua"/><path class="t56mc651a"/><path class="g_uyoe1hm"/><path class="m08bxwj7c"/></g>`,
		"fallback": "fluent-emoji-flat:mosquito",
	});
}

export default Component;
