import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov1lm5bif.css';

const viewBox = {"width":344,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov1lm5bif"/>`,
		"fallback": "zmdi:search-in-file",
	});
}

export default Component;
