import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmkn8zbba.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmkn8zbba"/>`,
		"fallback": "lsicon:move-outline",
	});
}

export default Component;
