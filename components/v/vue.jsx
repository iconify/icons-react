import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atcz-gbrf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atcz-gbrf"/>`,
		"fallback": "file-icons:vue",
	});
}

export default Component;
