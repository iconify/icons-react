import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir-kh0dyx.css';
import '../../css/v/vo8y2ebke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir-kh0dyx"/><path clip-rule="evenodd" class="vo8y2ebke"/>`,
		"fallback": "lucide-extended:laptop-minimal-check-filled",
	});
}

export default Component;
