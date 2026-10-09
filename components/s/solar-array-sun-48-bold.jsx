import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixy5tybnv.css';
import '../../css/s/sypm-h04n.css';
import '../../css/r/rdsgzmbit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixy5tybnv"/><path class="sypm-h04n"/><path class="rdsgzmbit"/>`,
		"fallback": "energy-icons:solar-array-sun-48-bold",
	});
}

export default Component;
