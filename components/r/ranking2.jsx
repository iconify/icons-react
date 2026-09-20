import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yh2a82bhg.css';
import '../../css/d/dm44abbrd.css';
import '../../css/q/qgoe78bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yh2a82bhg"/><path class="dm44abbrd"/><path class="qgoe78bty"/></g>`,
		"fallback": "reicon:ranking2",
	});
}

export default Component;
