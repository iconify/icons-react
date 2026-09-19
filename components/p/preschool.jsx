import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/r/rtufjx68u.css';
import '../../css/l/lc6uosh-o.css';
import '../../css/o/o_9d69bqp.css';
import '../../css/j/jp1slkr9d.css';
import '../../css/p/pxpblgbkl.css';
import '../../css/l/lcb8g-b-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><path class="rtufjx68u"/><path class="lc6uosh-o"/><path class="o_9d69bqp"/><path class="jp1slkr9d"/><path class="pxpblgbkl"/><path class="lcb8g-b-k"/></g>`,
		"fallback": "icon-park:preschool",
	});
}

export default Component;
