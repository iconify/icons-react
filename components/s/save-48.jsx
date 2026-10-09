import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7_yqvbof.css';
import '../../css/v/vf15g1hye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7_yqvbof"/><path class="vf15g1hye"/>`,
		"fallback": "energy-icons:save-48",
	});
}

export default Component;
