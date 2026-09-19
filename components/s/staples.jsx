import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdr11pzqz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdr11pzqz"/>`,
		"fallback": "healthicons:staples",
	});
}

export default Component;
