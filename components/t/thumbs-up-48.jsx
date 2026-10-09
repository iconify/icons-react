import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppm3_br9v.css';
import '../../css/r/rh3ta1ono.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppm3_br9v"/><path class="rh3ta1ono"/>`,
		"fallback": "energy-icons:thumbs-up-48",
	});
}

export default Component;
