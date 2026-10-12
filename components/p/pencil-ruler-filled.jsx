import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mei0sub7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mei0sub7h"/>`,
		"fallback": "lucide-extended:pencil-ruler-filled",
	});
}

export default Component;
