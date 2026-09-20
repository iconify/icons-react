import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulx3utvkz.css';
import '../../css/x/xzrhcac4o.css';
import '../../css/s/s8q4d1yjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ulx3utvkz"/><path class="xzrhcac4o"/><path class="s8q4d1yjg"/></g>`,
		"fallback": "streamline-freehand-color:messages-bubble-square-settings",
	});
}

export default Component;
