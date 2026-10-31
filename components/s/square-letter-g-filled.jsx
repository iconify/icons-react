import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kiugnmb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kiugnmb3t"/>`,
		"fallback": "lucide-extended:square-letter-g-filled",
	});
}

export default Component;
