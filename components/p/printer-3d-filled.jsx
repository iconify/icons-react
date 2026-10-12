import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8c0nk0pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8c0nk0pc"/>`,
		"fallback": "lucide-extended:printer-3d-filled",
	});
}

export default Component;
