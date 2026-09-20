import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgpa8lnsy.css';
import '../../css/n/npn-9infg.css';
import '../../css/r/rpjjyvoga.css';
import '../../css/s/sjo9pi08f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vgpa8lnsy"/><path class="npn-9infg"/><path class="rpjjyvoga"/><path class="sjo9pi08f"/></g>`,
		"fallback": "streamline-flex-color:toilet-man-woman-1",
	});
}

export default Component;
