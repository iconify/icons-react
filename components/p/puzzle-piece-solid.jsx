import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyk4vwbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyk4vwbue"/>`,
		"fallback": "withicons:puzzle-piece-solid",
	});
}

export default Component;
