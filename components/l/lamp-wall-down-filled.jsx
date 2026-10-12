import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgehs5t-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgehs5t-t"/>`,
		"fallback": "lucide-extended:lamp-wall-down-filled",
	});
}

export default Component;
