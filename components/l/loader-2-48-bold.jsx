import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbvg1o4cn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbvg1o4cn"/>`,
		"fallback": "energy-icons:loader-2-48-bold",
	});
}

export default Component;
