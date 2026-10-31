import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elsluvvlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="elsluvvlk"/>`,
		"fallback": "lucide-extended:square-letter-l-filled",
	});
}

export default Component;
