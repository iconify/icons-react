import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jse3np_ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jse3np_ai"/>`,
		"fallback": "lucide-extended:stroke-line-cap-square-filled",
	});
}

export default Component;
