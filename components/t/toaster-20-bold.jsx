import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnkuq4b8x.css';
import '../../css/t/tz4q3ccfx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnkuq4b8x"/><path class="tz4q3ccfx"/>`,
		"fallback": "energy-icons:toaster-20-bold",
	});
}

export default Component;
