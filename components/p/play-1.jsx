import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa4ivzb0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa4ivzb0r"/>`,
		"fallback": "subway:play-1",
	});
}

export default Component;
