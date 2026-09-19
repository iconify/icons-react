import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsg0_d1gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsg0_d1gc"/>`,
		"fallback": "eos-icons:secret-outlined",
	});
}

export default Component;
