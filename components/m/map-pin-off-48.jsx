import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xneu8q3zz.css';
import '../../css/n/n5wvztb1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xneu8q3zz"/><path class="n5wvztb1b"/>`,
		"fallback": "energy-icons:map-pin-off-48",
	});
}

export default Component;
