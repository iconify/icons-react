import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m7c3bty8u.css';
import '../../css/b/bh537rbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m7c3bty8u"/><path class="bh537rbgy"/></g>`,
		"fallback": "reicon:sidebar-top",
	});
}

export default Component;
