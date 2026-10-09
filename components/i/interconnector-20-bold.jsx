import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4-gwpb0q.css';
import '../../css/o/o3015xv_o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4-gwpb0q"/><path class="o3015xv_o"/>`,
		"fallback": "energy-icons:interconnector-20-bold",
	});
}

export default Component;
