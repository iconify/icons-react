import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2wnij_0h.css';
import '../../css/o/o6j5_ubif.css';
import '../../css/l/lu5ol8bsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2wnij_0h"/><path class="o6j5_ubif"/><path class="lu5ol8bsu"/>`,
		"fallback": "energy-icons:power-station-48-bold",
	});
}

export default Component;
