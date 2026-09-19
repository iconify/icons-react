import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgwi1hb_o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgwi1hb_o"/>`,
		"fallback": "dashicons:media-interactive",
	});
}

export default Component;
