import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l78kl6yan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l78kl6yan"/>`,
		"fallback": "vadivam:locate-off",
	});
}

export default Component;
