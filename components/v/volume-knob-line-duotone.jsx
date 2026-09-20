import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q1m15dbht.css';
import '../../css/g/gz5gyxvud.css';
import '../../css/r/ryg9aovix.css';
import '../../css/e/ecoj-b7jf.css';
import '../../css/q/q52ygebqi.css';
import '../../css/w/wkvw9yyvu.css';
import '../../css/c/ca2ow2b8g.css';
import '../../css/h/h5wiwsbyp.css';
import '../../css/a/az10qsb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="q1m15dbht"/><path class="gz5gyxvud"/><path class="ryg9aovix"/><path class="ecoj-b7jf"/><path class="q52ygebqi"/><path class="wkvw9yyvu"/><path class="ca2ow2b8g"/><path class="h5wiwsbyp"/><path class="az10qsb-k"/></g>`,
		"fallback": "solar:volume-knob-line-duotone",
	});
}

export default Component;
