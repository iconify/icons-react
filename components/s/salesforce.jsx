import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9xd_5ayx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9xd_5ayx"/>`,
		"fallback": "catppuccin:salesforce",
	});
}

export default Component;
