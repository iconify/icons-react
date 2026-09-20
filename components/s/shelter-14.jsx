import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdmajab3s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdmajab3s"/>`,
		"fallback": "osmic:shelter-14",
	});
}

export default Component;
