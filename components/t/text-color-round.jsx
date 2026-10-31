import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x82r1cpjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x82r1cpjn"/>`,
		"fallback": "coolicons:text-color-round",
	});
}

export default Component;
