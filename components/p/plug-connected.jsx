import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rblx6mh7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rblx6mh7e"/>`,
		"fallback": "tabler:plug-connected",
	});
}

export default Component;
