import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f123j2cib.css';
import '../../css/k/k5qmsq3ta.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xfbm2hbzi.css';
import '../../css/k/klsiukb5q.css';
import '../../css/j/jm0-70jfx.css';
import '../../css/y/y2wcldbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f123j2cib"/><path clip-rule="evenodd" class="k5qmsq3ta"/><g class="xtpeb-edw"><path class="xfbm2hbzi"/><path class="klsiukb5q"/><path class="jm0-70jfx"/><path class="y2wcldbxm"/></g>`,
		"fallback": "solar:rocket-2-bold-duotone",
	});
}

export default Component;
