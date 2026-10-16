import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-flw2bql.css';
import '../../css/v/vbmukxb1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-flw2bql"/><path class="vbmukxb1v"/>`,
		"fallback": "energy-icons:pc-tower-48",
	});
}

export default Component;
