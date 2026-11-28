import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjx1ls_pc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/agia-nwsy.css';
import '../../css/u/ug2_86nbt.css';
import '../../css/t/t5jm6bbxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjx1ls_pc secondary"/><g class="dt0cm9dhy primary"><path class="agia-nwsy"/><path class="ug2_86nbt"/><path class="t5jm6bbxv"/></g>`,
		"fallback": "iconaut:spider-duo",
	});
}

export default Component;
