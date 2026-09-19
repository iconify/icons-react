import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lru9cnbcu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lru9cnbcu"/>`,
		"fallback": "dinkie-icons:milk-package",
	});
}

export default Component;
