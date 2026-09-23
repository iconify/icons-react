import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nxkqdkb5j.css';
import '../../css/n/nbau3hbls.css';
import '../../css/d/dmrlztban.css';
import '../../css/p/pfr5hhxja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nxkqdkb5j"/><path class="nbau3hbls"/><path class="dmrlztban"/><path class="pfr5hhxja"/></g>`,
		"fallback": "keyline-icons:monitor-sparkles-sharp-two-tone",
	});
}

export default Component;
