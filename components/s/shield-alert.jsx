import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/f/fx6un8bdo.css';
import '../../css/m/mbhocybvf.css';
import '../../css/u/uiau6474l.css';
import '../../css/u/u3q7bkbmt.css';
import '../../css/o/owggs2gpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="fx6un8bdo"/><path class="mbhocybvf"/><path class="uiau6474l"/><path class="u3q7bkbmt"/><path class="owggs2gpz"/></g>`,
		"fallback": "withicons-retro:shield-alert",
	});
}

export default Component;
