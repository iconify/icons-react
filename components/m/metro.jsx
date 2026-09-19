import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jr7-fdb9w.css';
import '../../css/r/rcg--6eak.css';
import '../../css/j/jzoz2c3ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jr7-fdb9w"/><path class="rcg--6eak"/><path class="jzoz2c3ar"/></g>`,
		"fallback": "hugeicons:metro",
	});
}

export default Component;
