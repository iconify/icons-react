import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud7h_6y6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud7h_6y6z"/>`,
		"fallback": "energy-icons:solar-forecast-48",
	});
}

export default Component;
