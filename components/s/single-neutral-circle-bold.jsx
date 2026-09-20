import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii1b4wbhw.css';
import '../../css/i/ialwtkkcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii1b4wbhw"/><path class="ialwtkkcf"/>`,
		"fallback": "streamline-ultimate:single-neutral-circle-bold",
	});
}

export default Component;
