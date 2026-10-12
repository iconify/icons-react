import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn-_pbbrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yn-_pbbrd"/>`,
		"fallback": "lucide-extended:square-check-filled",
	});
}

export default Component;
