import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yygs5s-fv.css';
import '../../css/k/kcto9ubhm.css';
import '../../css/j/jgvnhdcus.css';
import '../../css/d/dikszcc_o.css';
import '../../css/s/sjl2bfbwr.css';
import '../../css/s/su0e5q9rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="yygs5s-fv"/><path class="kcto9ubhm wm-shine"/><path class="jgvnhdcus wm-k"/><path class="dikszcc_o wm-a"/><path class="sjl2bfbwr wm-s"/><path class="su0e5q9rc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:party-popper",
	});
}

export default Component;
