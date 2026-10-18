import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g99zjzb_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g99zjzb_y"/>`,
		"fallback": "energy-icons:peak-shaving-48-bold",
	});
}

export default Component;
