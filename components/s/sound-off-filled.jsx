import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_is46bkl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_is46bkl"/>`,
		"fallback": "ix:sound-off-filled",
	});
}

export default Component;
