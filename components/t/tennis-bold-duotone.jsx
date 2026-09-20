import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ouujdr8_t.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/bmthj1_mz.css';
import '../../css/d/dc55cmbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ouujdr8_t"/><g class="mc2zb0bvp"><path class="bmthj1_mz"/><path class="dc55cmbks"/></g></g>`,
		"fallback": "solar:tennis-bold-duotone",
	});
}

export default Component;
