import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt5w84_se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nt5w84_se"/>`,
		"fallback": "streamline-logos:vortex-logo-2-block",
	});
}

export default Component;
