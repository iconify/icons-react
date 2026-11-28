import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdldj9b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdldj9b0u"/>`,
		"fallback": "noviair:volcano",
	});
}

export default Component;
