import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zanfd_b2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zanfd_b2b"/>`,
		"fallback": "bx:share",
	});
}

export default Component;
