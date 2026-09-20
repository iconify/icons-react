import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5r6mjb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5r6mjb1w"/>`,
		"fallback": "lucide:presentation",
	});
}

export default Component;
