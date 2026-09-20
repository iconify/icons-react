import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgm3tebms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgm3tebms"/>`,
		"fallback": "thesvg-color:rabbitmq",
	});
}

export default Component;
