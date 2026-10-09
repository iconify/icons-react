import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pixuu6bja.css';
import '../../css/q/qlh3x2h3y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pixuu6bja"/><path class="qlh3x2h3y"/>`,
		"fallback": "energy-icons:leaf-48",
	});
}

export default Component;
