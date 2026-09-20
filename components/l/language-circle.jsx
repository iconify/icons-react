import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d4uvwobpw.css';
import '../../css/k/k7bif-bzk.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d4uvwobpw"/><path class="k7bif-bzk"/><path class="p9-zrkb4g"/></g>`,
		"fallback": "reicon:language-circle",
	});
}

export default Component;
