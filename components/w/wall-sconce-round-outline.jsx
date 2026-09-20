import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq42mz18t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq42mz18t"/>`,
		"fallback": "mdi:wall-sconce-round-outline",
	});
}

export default Component;
