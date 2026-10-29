import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j87zrr95u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j87zrr95u"/>`,
		"fallback": "lucide:letter-s",
	});
}

export default Component;
