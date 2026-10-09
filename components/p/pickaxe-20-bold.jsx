import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1de22b7f.css';
import '../../css/w/wzwobcbwt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1de22b7f"/><path class="wzwobcbwt"/>`,
		"fallback": "energy-icons:pickaxe-20-bold",
	});
}

export default Component;
