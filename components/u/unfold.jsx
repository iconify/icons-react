import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx_r_-bpy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx_r_-bpy"/>`,
		"fallback": "oui:unfold",
	});
}

export default Component;
