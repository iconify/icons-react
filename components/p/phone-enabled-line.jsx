import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jztotk7yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jztotk7yn"/>`,
		"fallback": "si:phone-enabled-line",
	});
}

export default Component;
