import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rra6siptg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rra6siptg"/>`,
		"fallback": "mdi:key-link",
	});
}

export default Component;
