import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drz3d56wa.css';
import '../../css/z/z2dsa8b7t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drz3d56wa"/><path class="z2dsa8b7t"/>`,
		"fallback": "energy-icons:pliers-20-bold",
	});
}

export default Component;
