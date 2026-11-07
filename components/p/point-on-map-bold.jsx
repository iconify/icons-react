import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydzcg6vpe.css';
import '../../css/m/m20a56bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydzcg6vpe"/><path clip-rule="evenodd" class="m20a56bvp"/>`,
		"fallback": "solar:point-on-map-bold",
	});
}

export default Component;
