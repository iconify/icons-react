import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us-3nabvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us-3nabvf"/>`,
		"fallback": "lucide-extended:spray-can-filled",
	});
}

export default Component;
