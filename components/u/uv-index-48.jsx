import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw0zipber.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw0zipber"/>`,
		"fallback": "energy-icons:uv-index-48",
	});
}

export default Component;
