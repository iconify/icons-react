import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgooogbsq.css';
import '../../css/d/d0-_7mw1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgooogbsq"/><path class="d0-_7mw1x"/>`,
		"fallback": "lucide-extended:pizza-filled",
	});
}

export default Component;
