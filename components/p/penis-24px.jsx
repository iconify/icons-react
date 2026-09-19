import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it7z-_d_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it7z-_d_u"/>`,
		"fallback": "healthicons:penis-24px",
	});
}

export default Component;
