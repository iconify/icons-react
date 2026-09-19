import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5fsg_rre.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5fsg_rre"/>`,
		"fallback": "catppuccin:remix",
	});
}

export default Component;
