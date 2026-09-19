import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iesj75bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iesj75bvx"/>`,
		"fallback": "cbi:top-window-closed",
	});
}

export default Component;
