import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtakimb5j.css';
import '../../css/q/qnyuvicip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtakimb5j"/><path class="qnyuvicip"/>`,
		"fallback": "energy-icons:trending-down-48-bold",
	});
}

export default Component;
