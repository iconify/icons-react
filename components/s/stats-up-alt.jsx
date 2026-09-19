import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpv6dt-5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpv6dt-5r"/>`,
		"fallback": "gridicons:stats-up-alt",
	});
}

export default Component;
