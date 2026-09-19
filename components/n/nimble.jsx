import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bng2y_bwo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bng2y_bwo"/>`,
		"fallback": "file-icons:nimble",
	});
}

export default Component;
