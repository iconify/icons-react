import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f51zekmzz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f51zekmzz"/>`,
		"fallback": "ix:table-insert-column-left",
	});
}

export default Component;
