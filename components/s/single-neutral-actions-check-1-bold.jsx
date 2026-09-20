import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc0uu2uxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc0uu2uxc"/>`,
		"fallback": "streamline-ultimate:single-neutral-actions-check-1-bold",
	});
}

export default Component;
