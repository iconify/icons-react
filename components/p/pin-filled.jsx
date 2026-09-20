import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csmpox66s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csmpox66s"/>`,
		"fallback": "ix:pin-filled",
	});
}

export default Component;
