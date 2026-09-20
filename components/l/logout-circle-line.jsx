import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkj8pk19w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkj8pk19w"/>`,
		"fallback": "ri:logout-circle-line",
	});
}

export default Component;
