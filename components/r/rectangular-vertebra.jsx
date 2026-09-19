import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvq76tm2d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvq76tm2d"/>`,
		"fallback": "icon-park-outline:rectangular-vertebra",
	});
}

export default Component;
