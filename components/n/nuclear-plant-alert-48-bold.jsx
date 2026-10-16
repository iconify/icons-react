import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi1_s4oue.css';
import '../../css/a/a-1g_ibpd.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi1_s4oue"/><path class="a-1g_ibpd"/><path class="ygtv74bcc"/>`,
		"fallback": "energy-icons:nuclear-plant-alert-48-bold",
	});
}

export default Component;
