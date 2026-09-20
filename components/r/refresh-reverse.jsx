import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1jznez-y.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1jznez-y"/>`,
		"fallback": "jam:refresh-reverse",
	});
}

export default Component;
