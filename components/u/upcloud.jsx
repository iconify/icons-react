import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf5e_5b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf5e_5b8h"/>`,
		"fallback": "thesvg:upcloud",
	});
}

export default Component;
