import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as-imfb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as-imfb5n"/>`,
		"fallback": "keyline-icons:monitor-off",
	});
}

export default Component;
