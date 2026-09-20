import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3d5edgbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3d5edgbz"/>`,
		"fallback": "mdi:slate-open-edit-outline",
	});
}

export default Component;
