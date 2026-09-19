import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt2b1obqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt2b1obqj"/>`,
		"fallback": "bxs:left-arrow-alt",
	});
}

export default Component;
