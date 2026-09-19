import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbhnw7wcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbhnw7wcs"/>`,
		"fallback": "boxicons:mobile-back-alt-filled",
	});
}

export default Component;
