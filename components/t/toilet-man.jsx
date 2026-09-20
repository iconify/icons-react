import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jxas-zbth.css';
import '../../css/e/ensyt8pbp.css';
import '../../css/c/ctkw7r7_i.css';
import '../../css/g/g3ir3vx2h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jxas-zbth"/><path class="ensyt8pbp"/><path class="ctkw7r7_i"/><path class="g3ir3vx2h"/></g>`,
		"fallback": "streamline-flex-color:toilet-man",
	});
}

export default Component;
