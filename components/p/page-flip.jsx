import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i4r8utbbt.css';
import '../../css/o/oa4tt2b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i4r8utbbt"/><path class="oa4tt2b3g"/></g>`,
		"fallback": "iconoir:page-flip",
	});
}

export default Component;
