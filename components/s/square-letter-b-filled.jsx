import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zotrfkt_o.css';
import '../../css/f/fp8qfjbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zotrfkt_o"/><path clip-rule="evenodd" class="fp8qfjbwy"/>`,
		"fallback": "lucide-extended:square-letter-b-filled",
	});
}

export default Component;
