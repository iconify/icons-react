import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7u5rm1fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7u5rm1fs"/>`,
		"fallback": "eos-icons:pin-outlined",
	});
}

export default Component;
