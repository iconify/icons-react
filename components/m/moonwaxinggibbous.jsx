import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_wev-bwf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_wev-bwf"/>`,
		"fallback": "whh:moonwaxinggibbous",
	});
}

export default Component;
