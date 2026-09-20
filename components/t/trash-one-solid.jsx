import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr9-5dbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr9-5dbdk"/>`,
		"fallback": "mynaui:trash-one-solid",
	});
}

export default Component;
