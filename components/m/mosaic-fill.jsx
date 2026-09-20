import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r91qs1n3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r91qs1n3f"/>`,
		"fallback": "mingcute:mosaic-fill",
	});
}

export default Component;
