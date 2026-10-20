import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lstoyk0re.css';
import '../../css/s/s4l_bwbwm.css';
import '../../css/x/x5tz2lbke.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lstoyk0re"/><path class="s4l_bwbwm"/><path class="x5tz2lbke"/>`,
		"fallback": "energy-icons:letter-spacing-48-bold",
	});
}

export default Component;
