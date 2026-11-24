import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf-5ik2ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lf-5ik2ge"/>`,
		"fallback": "lucide-extended:robot-vacuum-filled",
	});
}

export default Component;
