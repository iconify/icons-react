import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3vimybge.css';
import '../../css/n/nhqseef_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j3vimybge"/><path class="nhqseef_b"/>`,
		"fallback": "solar:rounded-magnifier-bold",
	});
}

export default Component;
