import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzj5p8byf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gzj5p8byf"/>`,
		"fallback": "lucide-extended:lock-keyhole-filled",
	});
}

export default Component;
