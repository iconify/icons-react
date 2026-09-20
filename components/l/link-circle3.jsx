import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dpw_zjbno.css';
import '../../css/w/wx79audmg.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dpw_zjbno"/><path class="wx79audmg"/><path class="p9-zrkb4g"/></g>`,
		"fallback": "reicon:link-circle3",
	});
}

export default Component;
