import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po8mu36tw.css';
import '../../css/x/xkmiijbwh.css';
import '../../css/d/dxjaq9byh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po8mu36tw"/><path class="xkmiijbwh"/><path class="dxjaq9byh"/>`,
		"fallback": "energy-icons:vector-pen-48-bold",
	});
}

export default Component;
