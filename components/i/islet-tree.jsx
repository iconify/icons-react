import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvd-evd9z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvd-evd9z"/>`,
		"fallback": "temaki:islet-tree",
	});
}

export default Component;
