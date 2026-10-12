import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okz8j0hfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okz8j0hfm"/>`,
		"fallback": "lucide-extended:square-split-vertical-filled",
	});
}

export default Component;
