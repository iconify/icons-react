import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb_obkb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mb_obkb9w"/>`,
		"fallback": "griddy-icons:server",
	});
}

export default Component;
