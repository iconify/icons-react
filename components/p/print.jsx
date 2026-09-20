import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld5x_6a-q.css';
import '../../css/h/h8g36l7qt.css';
import '../../css/i/i8vpebqdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ld5x_6a-q"/><path class="h8g36l7qt"/><path class="i8vpebqdy"/></g>`,
		"fallback": "reicon:print",
	});
}

export default Component;
