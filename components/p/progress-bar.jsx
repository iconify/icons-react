import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n51hvo05m.css';
import '../../css/p/pir0p8iya.css';
import '../../css/x/x5__mybwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n51hvo05m"/><rect class="pir0p8iya"/><path class="x5__mybwz"/></g>`,
		"fallback": "reicon:progress-bar",
	});
}

export default Component;
