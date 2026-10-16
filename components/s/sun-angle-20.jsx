import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3o57d_5v.css';
import '../../css/g/g_pbthpru.css';
import '../../css/v/vlpxa7bvf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3o57d_5v"/><path class="g_pbthpru"/><path class="vlpxa7bvf"/>`,
		"fallback": "energy-icons:sun-angle-20",
	});
}

export default Component;
