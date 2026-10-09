import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3x9rfeak.css';
import '../../css/e/ebzb5lb2r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3x9rfeak"/><path class="ebzb5lb2r"/>`,
		"fallback": "energy-icons:thumbs-up-48-bold",
	});
}

export default Component;
