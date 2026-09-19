import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2fch2n5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2fch2n5v"/>`,
		"fallback": "boxicons:line-spacing-alt-filled",
	});
}

export default Component;
