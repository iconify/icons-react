import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dll7k3y3y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dll7k3y3y"/>`,
		"fallback": "teenyicons:italic-outline",
	});
}

export default Component;
