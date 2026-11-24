import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcjn2w3es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcjn2w3es"/>`,
		"fallback": "lucide-extended:spade-filled",
	});
}

export default Component;
