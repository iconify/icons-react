import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f4ley9blm.css';
import '../../css/u/uxuy8f4og.css';
import '../../css/s/s12xh-w7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f4ley9blm"/><path class="uxuy8f4og"/><path class="s12xh-w7d"/></g>`,
		"fallback": "andrsrxn:shuffle",
	});
}

export default Component;
