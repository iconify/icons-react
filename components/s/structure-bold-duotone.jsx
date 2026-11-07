import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_bh6-v-a.css';
import '../../css/h/hnytd9b5z.css';
import '../../css/u/ux7dfvzra.css';
import '../../css/s/siai_tb_r.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/t2yzg7qtj.css';
import '../../css/a/a7fvcojxy.css';
import '../../css/v/vdyfv57dh.css';
import '../../css/r/r2hb2jpyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_bh6-v-a"/><path class="hnytd9b5z"/><path class="ux7dfvzra"/><path class="siai_tb_r"/><g class="xtpeb-edw"><path class="t2yzg7qtj"/><path class="a7fvcojxy"/><path class="vdyfv57dh"/><path class="r2hb2jpyg"/></g>`,
		"fallback": "solar:structure-bold-duotone",
	});
}

export default Component;
