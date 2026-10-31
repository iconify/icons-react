import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph1k27nch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ph1k27nch"/>`,
		"fallback": "lucide-extended:square-letter-n-filled",
	});
}

export default Component;
