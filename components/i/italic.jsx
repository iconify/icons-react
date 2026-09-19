import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp6qv9b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp6qv9b2h"/>`,
		"fallback": "codex:italic",
	});
}

export default Component;
