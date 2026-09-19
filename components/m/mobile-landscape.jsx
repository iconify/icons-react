import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf7pp8qih.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf7pp8qih"/>`,
		"fallback": "carbon:mobile-landscape",
	});
}

export default Component;
