import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg36c1b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="kg36c1b6k"/>`,
		"fallback": "codex:stop",
	});
}

export default Component;
