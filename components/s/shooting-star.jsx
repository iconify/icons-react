import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8gxamdvw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8gxamdvw"/>`,
		"fallback": "doodle-icons:shooting-star",
	});
}

export default Component;
