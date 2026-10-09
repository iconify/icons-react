import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukg4327zf.css';
import '../../css/h/hc8c97wzt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukg4327zf"/><path class="hc8c97wzt"/>`,
		"fallback": "energy-icons:map-20-bold",
	});
}

export default Component;
