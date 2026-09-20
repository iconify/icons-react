import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm63-8bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm63-8bxd"/>`,
		"fallback": "mynaui:plus-solid",
	});
}

export default Component;
