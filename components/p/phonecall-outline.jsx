import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgp-6qxka.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgp-6qxka"/>`,
		"fallback": "teenyicons:phonecall-outline",
	});
}

export default Component;
