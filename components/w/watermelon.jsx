import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mesj8d27e.css';
import '../../css/d/dfew9rbse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mesj8d27e"/><path class="dfew9rbse"/>`,
		"fallback": "boxicons:watermelon",
	});
}

export default Component;
