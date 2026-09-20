import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urb91x35d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urb91x35d"/>`,
		"fallback": "lucide:plant-pot",
	});
}

export default Component;
