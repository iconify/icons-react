import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ueolijb3i.css';
import '../../css/k/kcn_frb2a.css';
import '../../css/f/f-libdcom.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ueolijb3i"/><path class="kcn_frb2a"/><path class="f-libdcom"/></g>`,
		"fallback": "streamline-color:pathfinder-divide",
	});
}

export default Component;
