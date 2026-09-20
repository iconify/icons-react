import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmnq1abvl.css';
import '../../css/r/r_bofjbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fmnq1abvl"/><path class="r_bofjbja"/></g>`,
		"fallback": "tdesign:slice",
	});
}

export default Component;
