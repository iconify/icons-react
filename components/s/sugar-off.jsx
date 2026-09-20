import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmr3c33eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmr3c33eq"/>`,
		"fallback": "mdi:sugar-off",
	});
}

export default Component;
