import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yywirvbtg.css';
import '../../css/j/jar8vstvf.css';
import '../../css/m/m8zuw9b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yywirvbtg"/><path class="jar8vstvf"/><path class="m8zuw9b1i"/></g>`,
		"fallback": "hugeicons:super-intelligence-video",
	});
}

export default Component;
