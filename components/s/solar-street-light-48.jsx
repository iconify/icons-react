import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-ohmbl_e.css';
import '../../css/m/mhdsebbpt.css';
import '../../css/i/ib5meve9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-ohmbl_e"/><path class="mhdsebbpt"/><path class="ib5meve9m"/>`,
		"fallback": "energy-icons:solar-street-light-48",
	});
}

export default Component;
