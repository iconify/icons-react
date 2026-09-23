import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/g/ghhtczbby.css';
import '../../css/f/fx429z3ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ghhtczbby"/><path class="fx429z3ja"/></g>`,
		"fallback": "keyline-icons:refresh-cw-sparkles-sharp",
	});
}

export default Component;
