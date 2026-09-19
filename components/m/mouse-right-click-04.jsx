import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q2hkngy9g.css';
import '../../css/j/jwjog_-hh.css';
import '../../css/o/oj6yh1dyi.css';
import '../../css/m/m5ccstaut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q2hkngy9g"/><path class="jwjog_-hh"/><path class="oj6yh1dyi"/><path class="m5ccstaut"/></g>`,
		"fallback": "hugeicons:mouse-right-click-04",
	});
}

export default Component;
