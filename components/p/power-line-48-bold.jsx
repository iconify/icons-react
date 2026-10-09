import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x32ukaqaa.css';
import '../../css/i/ivrs2fbio.css';
import '../../css/v/veyr_t3yf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x32ukaqaa"/><path class="ivrs2fbio"/><path class="veyr_t3yf"/>`,
		"fallback": "energy-icons:power-line-48-bold",
	});
}

export default Component;
