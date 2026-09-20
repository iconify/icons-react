import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thbz86bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thbz86bat"/>`,
		"fallback": "streamline-ultimate:sudoku-bold",
	});
}

export default Component;
