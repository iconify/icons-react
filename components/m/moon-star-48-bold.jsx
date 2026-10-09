import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faamz_bdw.css';
import '../../css/u/uv8trf44e.css';
import '../../css/b/bswze6tia.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faamz_bdw"/><path class="uv8trf44e"/><path class="bswze6tia"/>`,
		"fallback": "energy-icons:moon-star-48-bold",
	});
}

export default Component;
