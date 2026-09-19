import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdo6aybas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdo6aybas"/>`,
		"fallback": "codex:list-numbered",
	});
}

export default Component;
