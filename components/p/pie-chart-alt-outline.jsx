import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu8aw7boy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu8aw7boy"/>`,
		"fallback": "teenyicons:pie-chart-alt-outline",
	});
}

export default Component;
