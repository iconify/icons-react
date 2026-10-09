import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy4vy0gsk.css';
import '../../css/v/vxoaqbnzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy4vy0gsk"/><path class="vxoaqbnzd"/>`,
		"fallback": "energy-icons:offshore-substation-48",
	});
}

export default Component;
