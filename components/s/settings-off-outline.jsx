import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr8uoyb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr8uoyb3t"/>`,
		"fallback": "mdi:settings-off-outline",
	});
}

export default Component;
