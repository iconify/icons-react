import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8nwl5bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8nwl5bbs"/>`,
		"fallback": "ci:menu-alt-01",
	});
}

export default Component;
