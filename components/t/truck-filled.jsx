import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_od4ab8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_od4ab8i"/>`,
		"fallback": "lucide-extended:truck-filled",
	});
}

export default Component;
