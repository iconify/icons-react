import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecf832bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecf832bdk"/>`,
		"fallback": "mdi:settings-off",
	});
}

export default Component;
