import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9_hs9kxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m9_hs9kxx"/>`,
		"fallback": "lucide-extended:square-text-filled",
	});
}

export default Component;
