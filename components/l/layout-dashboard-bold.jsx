import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vby78g3_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vby78g3_d"/>`,
		"fallback": "streamline-ultimate:layout-dashboard-bold",
	});
}

export default Component;
