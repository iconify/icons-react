import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slgm1gbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="slgm1gbbs"/>`,
		"fallback": "lucide-extended:mouse-filled",
	});
}

export default Component;
