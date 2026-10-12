import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbma3xpbl.css';
import '../../css/a/avpyb3bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbma3xpbl"/><path class="avpyb3bsq"/>`,
		"fallback": "lucide-extended:square-pen-filled",
	});
}

export default Component;
