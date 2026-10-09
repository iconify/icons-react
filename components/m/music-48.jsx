import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd66bdkym.css';
import '../../css/c/cuq6r7b0r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd66bdkym"/><path class="cuq6r7b0r"/>`,
		"fallback": "energy-icons:music-48",
	});
}

export default Component;
