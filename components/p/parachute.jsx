import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl1gjukeh.css';
import '../../css/p/pij3i9btg.css';
import '../../css/v/v-57kdh_g.css';
import '../../css/z/zym60lbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gl1gjukeh"/><circle class="pij3i9btg"/><path class="v-57kdh_g"/><circle class="zym60lbig"/></g>`,
		"fallback": "andrsrxn:parachute",
	});
}

export default Component;
