import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqy31ubzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqy31ubzz"/>`,
		"fallback": "mdi:less-than-or-equal",
	});
}

export default Component;
