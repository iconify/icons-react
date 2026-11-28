import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpnsu6bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpnsu6bam"/>`,
		"fallback": "noviair:plane-arrow-up",
	});
}

export default Component;
