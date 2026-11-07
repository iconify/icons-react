import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_frcb-c.css';
import '../../css/g/gcj62obsa.css';
import '../../css/f/fwihx0b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_frcb-c"/><path class="gcj62obsa"/><path class="fwihx0b1i"/>`,
		"fallback": "solar:refresh-square-bold-duotone",
	});
}

export default Component;
