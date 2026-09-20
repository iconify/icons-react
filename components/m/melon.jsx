import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eho20050m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eho20050m"/>`,
		"fallback": "tabler:melon",
	});
}

export default Component;
