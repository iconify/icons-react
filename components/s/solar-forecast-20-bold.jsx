import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho_z9ty5t.css';
import '../../css/z/zvwpzebnm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho_z9ty5t"/><path class="zvwpzebnm"/>`,
		"fallback": "energy-icons:solar-forecast-20-bold",
	});
}

export default Component;
