import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv8m1fbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qv8m1fbtm"/>`,
		"fallback": "lucide-extended:lamp-ceiling-filled",
	});
}

export default Component;
