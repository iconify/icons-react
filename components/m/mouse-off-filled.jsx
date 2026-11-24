import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu04c6ibz.css';
import '../../css/l/ly-oin5oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu04c6ibz"/><path clip-rule="evenodd" class="ly-oin5oy"/>`,
		"fallback": "lucide-extended:mouse-off-filled",
	});
}

export default Component;
