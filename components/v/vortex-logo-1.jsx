import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u32o3n5de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u32o3n5de"/>`,
		"fallback": "streamline-logos:vortex-logo-1",
	});
}

export default Component;
