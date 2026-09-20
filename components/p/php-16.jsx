import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrhi1hbzl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrhi1hbzl"/>`,
		"fallback": "nonicons:php-16",
	});
}

export default Component;
