import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnz3drtgn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnz3drtgn"/>`,
		"fallback": "map:location-arrow",
	});
}

export default Component;
