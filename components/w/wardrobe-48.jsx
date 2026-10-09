import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svhifwbxd.css';
import '../../css/o/oxanvq5pj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svhifwbxd"/><path class="oxanvq5pj"/>`,
		"fallback": "energy-icons:wardrobe-48",
	});
}

export default Component;
