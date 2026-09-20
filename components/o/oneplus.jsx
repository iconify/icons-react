import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj0a-f0_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj0a-f0_c"/>`,
		"fallback": "simple-icons:oneplus",
	});
}

export default Component;
