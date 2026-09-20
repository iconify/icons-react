import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3dfo_bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3dfo_bzq"/>`,
		"fallback": "mdi:share-variant",
	});
}

export default Component;
