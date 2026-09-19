import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsqlp7fem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsqlp7fem"/>`,
		"fallback": "hugeicons:pen-01",
	});
}

export default Component;
