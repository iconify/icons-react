import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2-y9fm_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2-y9fm_k"/>`,
		"fallback": "lucide-extended:square-letter-c-filled",
	});
}

export default Component;
