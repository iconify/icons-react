import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xugm93bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xugm93bda"/>`,
		"fallback": "thesvg-color:minimax",
	});
}

export default Component;
