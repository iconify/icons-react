import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln3ktcb3i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln3ktcb3i"/>`,
		"fallback": "energy-icons:shield-off-20",
	});
}

export default Component;
