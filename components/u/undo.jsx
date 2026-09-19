import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nob6eo91n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nob6eo91n"/>`,
		"fallback": "codex:undo",
	});
}

export default Component;
