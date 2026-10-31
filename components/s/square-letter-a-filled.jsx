import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ickn83b4x.css';
import '../../css/j/jpp-j2s8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ickn83b4x"/><path clip-rule="evenodd" class="jpp-j2s8z"/>`,
		"fallback": "lucide-extended:square-letter-a-filled",
	});
}

export default Component;
