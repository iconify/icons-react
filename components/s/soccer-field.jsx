import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/behj_bbnf.css';
import '../../css/u/uqesg5bpl.css';
import '../../css/t/tzh7aenjl.css';
import '../../css/r/rlyej6brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="behj_bbnf"/><path class="uqesg5bpl"/><path class="tzh7aenjl"/><path class="rlyej6brl"/></g>`,
		"fallback": "streamline-ultimate-color:soccer-field",
	});
}

export default Component;
