import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr76icdak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr76icdak"/>`,
		"fallback": "catppuccin:scheme",
	});
}

export default Component;
