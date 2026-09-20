import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh5f5isdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh5f5isdd"/>`,
		"fallback": "mdi:lock-percent-open-variant",
	});
}

export default Component;
