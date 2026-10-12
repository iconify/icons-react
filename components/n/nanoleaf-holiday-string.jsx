import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep6_o7bki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep6_o7bki"/>`,
		"fallback": "cbi:nanoleaf-holiday-string",
	});
}

export default Component;
