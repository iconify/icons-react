import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvca9t96l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvca9t96l"/>`,
		"fallback": "bxs:quote-alt-left",
	});
}

export default Component;
