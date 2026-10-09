import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw0sv1b2p.css';
import '../../css/o/ofyhu63mo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw0sv1b2p"/><path class="ofyhu63mo"/>`,
		"fallback": "energy-icons:smartphone-48-bold",
	});
}

export default Component;
