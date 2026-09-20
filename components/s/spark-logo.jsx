import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/q8wa2obtf.css';
import '../../css/d/d0gemnqev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="q8wa2obtf"/><path class="d0gemnqev"/></g>`,
		"fallback": "streamline-logos:spark-logo",
	});
}

export default Component;
