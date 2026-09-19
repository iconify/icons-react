import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqj5beb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqj5beb8p"/>`,
		"fallback": "boxicons:table-tennis",
	});
}

export default Component;
