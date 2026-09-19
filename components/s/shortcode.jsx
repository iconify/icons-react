import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qikil81ib.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qikil81ib"/>`,
		"fallback": "dashicons:shortcode",
	});
}

export default Component;
