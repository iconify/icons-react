import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdb70jjls.css';
import '../../css/t/tfdzc8bht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdb70jjls"/><path class="tfdzc8bht"/>`,
		"fallback": "energy-icons:or-gate-48",
	});
}

export default Component;
