import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joilwmbfp.css';
import '../../css/f/flarx8bcv.css';
import '../../css/s/sxaczibgl.css';
import '../../css/z/zis9r0b_f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joilwmbfp"/><path class="flarx8bcv"/><path class="sxaczibgl"/><path class="zis9r0b_f"/>`,
		"fallback": "energy-icons:load-shifting-20-bold",
	});
}

export default Component;
