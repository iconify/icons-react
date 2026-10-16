import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf6_mjbtg.css';
import '../../css/r/rpy7blvsf.css';
import '../../css/y/yc61-tb7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf6_mjbtg"/><path class="rpy7blvsf"/><path class="yc61-tb7e"/>`,
		"fallback": "energy-icons:police-station-48-bold",
	});
}

export default Component;
