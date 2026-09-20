import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae80w05fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae80w05fk"/>`,
		"fallback": "mdi:visibility-off-outline",
	});
}

export default Component;
