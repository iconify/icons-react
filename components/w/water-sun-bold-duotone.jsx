import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybi0n7bgm.css';
import '../../css/t/tsvf0gb_d.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gh-zkbf1h.css';
import '../../css/h/hzo2obc3l.css';
import '../../css/z/zhxlol8cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ybi0n7bgm"/><path class="tsvf0gb_d"/><g class="mc2zb0bvp"><path class="gh-zkbf1h"/><path class="hzo2obc3l"/><path class="zhxlol8cy"/></g></g>`,
		"fallback": "solar:water-sun-bold-duotone",
	});
}

export default Component;
