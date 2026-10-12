import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-q0yut5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u-q0yut5d"/>`,
		"fallback": "lucide-extended:shield-user-filled",
	});
}

export default Component;
