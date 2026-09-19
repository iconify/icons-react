import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvfd0-lzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvfd0-lzu"/>`,
		"fallback": "boxicons:location-filled",
	});
}

export default Component;
