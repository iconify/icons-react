import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz238rb6s.css';
import '../../css/y/yvwzr-bcl.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz238rb6s"/><path class="yvwzr-bcl"/><path class="ygtv74bcc"/>`,
		"fallback": "energy-icons:solar-inverter-alert-48-bold",
	});
}

export default Component;
