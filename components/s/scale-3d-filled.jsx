import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6c6j0kyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6c6j0kyf"/>`,
		"fallback": "lucide-extended:scale-3d-filled",
	});
}

export default Component;
