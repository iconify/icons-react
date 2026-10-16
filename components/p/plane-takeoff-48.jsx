import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op0q6vcgg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op0q6vcgg"/>`,
		"fallback": "energy-icons:plane-takeoff-48",
	});
}

export default Component;
