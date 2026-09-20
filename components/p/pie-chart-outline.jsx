import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kav5bxc9k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kav5bxc9k"/>`,
		"fallback": "teenyicons:pie-chart-outline",
	});
}

export default Component;
