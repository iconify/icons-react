import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8ahwiboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8ahwiboh"/>`,
		"fallback": "lucide-extended:land-plot-filled",
	});
}

export default Component;
