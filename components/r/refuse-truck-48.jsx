import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s85zepkkg.css';
import '../../css/r/r06c8lbss.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s85zepkkg"/><path class="r06c8lbss"/>`,
		"fallback": "energy-icons:refuse-truck-48",
	});
}

export default Component;
