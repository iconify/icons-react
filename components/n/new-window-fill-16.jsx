import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7vuirbjs.css';
import '../../css/p/p3gjzeb-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7vuirbjs"/><path class="p3gjzeb-n"/>`,
		"fallback": "garden:new-window-fill-16",
	});
}

export default Component;
