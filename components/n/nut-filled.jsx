import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ifidekg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f6ifidekg"/>`,
		"fallback": "lucide-extended:nut-filled",
	});
}

export default Component;
