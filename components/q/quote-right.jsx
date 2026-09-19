import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaz5m1bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaz5m1bxu"/>`,
		"fallback": "fe:quote-right",
	});
}

export default Component;
