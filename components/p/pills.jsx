import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es7ggpb0t.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es7ggpb0t"/>`,
		"fallback": "fa-solid:pills",
	});
}

export default Component;
