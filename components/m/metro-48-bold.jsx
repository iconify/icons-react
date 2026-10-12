import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_qf0abbe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_qf0abbe"/>`,
		"fallback": "energy-icons:metro-48-bold",
	});
}

export default Component;
