import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nboi0qbgb.css';
import '../../css/z/zhh6u5bcx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nboi0qbgb"/><path class="zhh6u5bcx"/>`,
		"fallback": "energy-icons:interconnector-20",
	});
}

export default Component;
