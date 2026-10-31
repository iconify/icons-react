import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llwohje9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llwohje9s"/>`,
		"fallback": "coolicons:square-fill-round",
	});
}

export default Component;
