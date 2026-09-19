import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn5e1o2rf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn5e1o2rf"/>`,
		"fallback": "file-icons:modernweb",
	});
}

export default Component;
