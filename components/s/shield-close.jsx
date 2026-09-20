import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-e3gqo4l.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-e3gqo4l"/>`,
		"fallback": "jam:shield-close",
	});
}

export default Component;
