import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcvmx_b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcvmx_b-o"/>`,
		"fallback": "covid:social-distancing-protect-shield-1",
	});
}

export default Component;
