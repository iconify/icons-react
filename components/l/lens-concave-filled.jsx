import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wik1a2t4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wik1a2t4f"/>`,
		"fallback": "lucide-extended:lens-concave-filled",
	});
}

export default Component;
