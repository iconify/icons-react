import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy4vy0gsk.css';
import '../../css/u/uy2o04bub.css';
import '../../css/m/mbusswbar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy4vy0gsk"/><path class="uy2o04bub"/><path class="mbusswbar"/>`,
		"fallback": "energy-icons:piston-48",
	});
}

export default Component;
