import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ade-wbb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ade-wbb6y"/>`,
		"fallback": "codex:repeat",
	});
}

export default Component;
