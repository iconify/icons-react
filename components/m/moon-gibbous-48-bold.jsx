import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdlgrw2ra.css';
import '../../css/o/o26qb2bal.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdlgrw2ra"/><path class="o26qb2bal"/>`,
		"fallback": "energy-icons:moon-gibbous-48-bold",
	});
}

export default Component;
