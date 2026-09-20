import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_z3i_b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_z3i_b0a"/>`,
		"fallback": "reicon:toggle-on-circle-filled",
	});
}

export default Component;
