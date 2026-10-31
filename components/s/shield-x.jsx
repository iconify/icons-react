import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/w/wf3tj5bss.css';
import '../../css/e/eql9fgb5r.css';
import '../../css/u/urjm7cbaj.css';
import '../../css/z/zus36ubwg.css';
import '../../css/y/yf4rkkbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="wf3tj5bss"/><path class="eql9fgb5r"/><path class="urjm7cbaj"/><path class="zus36ubwg"/><path class="yf4rkkbgm"/></g>`,
		"fallback": "withicons-retro:shield-x",
	});
}

export default Component;
