import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0fwv-vzz.css';
import '../../css/e/el-qg0b0m.css';
import '../../css/g/gn48l6_0j.css';
import '../../css/j/jmr1gwbiu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g0fwv-vzz"/><path class="el-qg0b0m"/><path class="gn48l6_0j"/><path class="jmr1gwbiu"/></g>`,
		"fallback": "streamline-flex-color:investing-and-banking",
	});
}

export default Component;
