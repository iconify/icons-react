import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njb223hhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njb223hhu"/>`,
		"fallback": "mdi:script-text-key-outline",
	});
}

export default Component;
