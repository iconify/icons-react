import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pojwhllyo.css';
import '../../css/s/szbegjwfu.css';
import '../../css/g/g_v4kfbnp.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/l/lm8a-pbpv.css';
import '../../css/u/uy0h_tbuk.css';
import '../../css/o/o_i8g41wp.css';
import '../../css/f/f16ars37p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pojwhllyo"/><path class="szbegjwfu"/><path class="g_v4kfbnp"/><g class="rpvb-o6bq"><path class="lm8a-pbpv"/><path class="uy0h_tbuk"/><path class="o_i8g41wp"/><path class="f16ars37p"/></g>`,
		"fallback": "openmoji:light-bulb",
	});
}

export default Component;
