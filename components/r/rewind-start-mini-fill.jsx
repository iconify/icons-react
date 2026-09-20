import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0kl24bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0kl24bxh"/>`,
		"fallback": "ri:rewind-start-mini-fill",
	});
}

export default Component;
