import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp7g_qljv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp7g_qljv"/>`,
		"fallback": "catppuccin:license",
	});
}

export default Component;
