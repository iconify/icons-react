import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibo-1vb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibo-1vb4k"/>`,
		"fallback": "lucide-extended:mic-vocal-filled",
	});
}

export default Component;
