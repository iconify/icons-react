import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeqn6t9xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeqn6t9xq"/>`,
		"fallback": "mage:select-box",
	});
}

export default Component;
