import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq85gtbfn.css';
import '../../css/f/f_pikgbvc.css';
import '../../css/z/z_7kwvi-x.css';
import '../../css/u/ubg5h9bog.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mq85gtbfn"/><path class="f_pikgbvc"/><path class="z_7kwvi-x"/><path class="ubg5h9bog"/></g>`,
		"fallback": "streamline-color:toilet-man",
	});
}

export default Component;
