import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc5busrsc.css';
import '../../css/o/oim_e1bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc5busrsc"/><path class="oim_e1bef"/>`,
		"fallback": "eva:save-fill",
	});
}

export default Component;
