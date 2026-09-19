import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siedz3bwk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siedz3bwk"/>`,
		"fallback": "file-icons:sublime",
	});
}

export default Component;
