import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxsck51ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxsck51ei"/>`,
		"fallback": "simple-icons:ted",
	});
}

export default Component;
