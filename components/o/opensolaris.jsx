import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li83u43yw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li83u43yw"/>`,
		"fallback": "file-icons:opensolaris",
	});
}

export default Component;
