import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l26-ium8o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l26-ium8o"/>`,
		"fallback": "healthicons:job-status-level",
	});
}

export default Component;
