import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wen_a-b4j.css';
import '../../css/m/myuaap4gp.css';
import '../../css/c/cdjndmybd.css';
import '../../css/m/m1ktd-bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wen_a-b4j"/><path class="myuaap4gp"/><path class="cdjndmybd"/><path class="m1ktd-bef"/></g>`,
		"fallback": "andrsrxn:tree-palm",
	});
}

export default Component;
