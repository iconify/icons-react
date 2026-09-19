import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcl7_1caz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcl7_1caz"/>`,
		"fallback": "cbi:nanoleaf",
	});
}

export default Component;
