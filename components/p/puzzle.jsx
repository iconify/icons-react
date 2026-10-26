import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk524nb7h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk524nb7h"/>`,
		"fallback": "doodle-icons:puzzle",
	});
}

export default Component;
