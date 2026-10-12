import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyo179-vy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyo179-vy"/>`,
		"fallback": "lucide-extended:user-x-filled",
	});
}

export default Component;
