import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff3gqsu_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff3gqsu_c"/>`,
		"fallback": "lucide-extended:shovel-filled",
	});
}

export default Component;
