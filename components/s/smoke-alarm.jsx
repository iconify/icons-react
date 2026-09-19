import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s45ra5bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s45ra5bxk"/>`,
		"fallback": "boxicons:smoke-alarm",
	});
}

export default Component;
