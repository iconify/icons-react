import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntws4y6ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntws4y6ls"/>`,
		"fallback": "ix:shield-ai-filled",
	});
}

export default Component;
