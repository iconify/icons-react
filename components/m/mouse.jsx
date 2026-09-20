import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh1wl9b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh1wl9b1p"/>`,
		"fallback": "uil:mouse",
	});
}

export default Component;
