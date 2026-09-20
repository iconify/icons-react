import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl0zvbbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl0zvbbcq"/>`,
		"fallback": "keyline-icons:paint-roller",
	});
}

export default Component;
