import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2nxiyvua.css';
import '../../css/g/gs-niz01e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2nxiyvua"/><path class="gs-niz01e"/>`,
		"fallback": "energy-icons:temperature-48-bold",
	});
}

export default Component;
