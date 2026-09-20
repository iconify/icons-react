import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9ep4jbjl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9ep4jbjl"/>`,
		"fallback": "streamline:phone-mobile-phone",
	});
}

export default Component;
