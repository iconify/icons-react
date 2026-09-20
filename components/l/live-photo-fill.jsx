import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmw45m5_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bmw45m5_z"/>`,
		"fallback": "mingcute:live-photo-fill",
	});
}

export default Component;
