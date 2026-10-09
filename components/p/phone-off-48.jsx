import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me0tyib1r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me0tyib1r"/>`,
		"fallback": "energy-icons:phone-off-48",
	});
}

export default Component;
