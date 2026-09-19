import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcso0lb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcso0lb3z"/>`,
		"fallback": "hugeicons:map-minus",
	});
}

export default Component;
