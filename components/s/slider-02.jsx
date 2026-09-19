import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm8t4_b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm8t4_b8z"/>`,
		"fallback": "ci:slider-02",
	});
}

export default Component;
