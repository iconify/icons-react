import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyfy5q2jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yyfy5q2jf"/>`,
		"fallback": "lucide-extended:vote-filled",
	});
}

export default Component;
