import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0_nckbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q0_nckbnz"/>`,
		"fallback": "lucide-extended:square-letter-z-filled",
	});
}

export default Component;
