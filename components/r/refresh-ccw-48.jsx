import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn8iwfgiz.css';
import '../../css/e/ey8dz-b1l.css';
import '../../css/y/y1198cbkx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn8iwfgiz"/><path class="ey8dz-b1l"/><path class="y1198cbkx"/>`,
		"fallback": "energy-icons:refresh-ccw-48",
	});
}

export default Component;
