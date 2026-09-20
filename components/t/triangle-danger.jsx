import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knjzst9om.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knjzst9om"/>`,
		"fallback": "jam:triangle-danger",
	});
}

export default Component;
