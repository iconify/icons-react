import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj8ilnbfl.css';
import '../../css/t/t4mrhvxik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj8ilnbfl"/><path class="t4mrhvxik"/>`,
		"fallback": "energy-icons:rack-and-pinion-48",
	});
}

export default Component;
