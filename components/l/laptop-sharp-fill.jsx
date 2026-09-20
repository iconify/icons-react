import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mods8hi-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mods8hi-d"/>`,
		"fallback": "keyline-icons:laptop-sharp-fill",
	});
}

export default Component;
