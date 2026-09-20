import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xfdvzbb0y.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/d/dwdco7bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xfdvzbb0y"/><path class="rjmd6lg4e"/><path class="dwdco7bkc"/></g>`,
		"fallback": "streamline-ultimate:radioactive-circle",
	});
}

export default Component;
