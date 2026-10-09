import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7u15acll.css';
import '../../css/f/f4uz1jmyd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7u15acll"/><path class="f4uz1jmyd"/>`,
		"fallback": "energy-icons:toggle-right-20",
	});
}

export default Component;
