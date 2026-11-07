import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/d/d6rgfsbkq.css';
import '../../css/k/kdfl2wb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="d6rgfsbkq"/><path class="kdfl2wb4a"/>`,
		"fallback": "solar:square-sort-vertical-bold-duotone",
	});
}

export default Component;
