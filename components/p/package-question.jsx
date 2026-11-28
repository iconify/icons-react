import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2q3-ubup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2q3-ubup"/>`,
		"fallback": "noviair-light:package-question",
	});
}

export default Component;
