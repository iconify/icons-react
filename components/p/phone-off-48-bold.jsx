import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1qei_b8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1qei_b8y"/>`,
		"fallback": "energy-icons:phone-off-48-bold",
	});
}

export default Component;
