import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shrl-vx_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shrl-vx_d"/>`,
		"fallback": "cbi:radarr",
	});
}

export default Component;
