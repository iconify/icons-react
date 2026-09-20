import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0fjl8npu.css';
import '../../css/h/hia_h7bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0fjl8npu"/><path class="hia_h7bjj"/></g>`,
		"fallback": "tdesign:sticky-note",
	});
}

export default Component;
