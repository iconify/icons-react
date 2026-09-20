import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn9atv0gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn9atv0gx"/>`,
		"fallback": "lucide-lab:scarf",
	});
}

export default Component;
