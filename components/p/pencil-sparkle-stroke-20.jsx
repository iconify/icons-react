import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul0vswbpp.css';
import '../../css/q/qggpi_b3i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul0vswbpp"/><path class="qggpi_b3i"/>`,
		"fallback": "garden:pencil-sparkle-stroke-20",
	});
}

export default Component;
