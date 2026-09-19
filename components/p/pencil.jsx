import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wozebsbkx.css';

const viewBox = {"width":695,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wozebsbkx"/>`,
		"fallback": "ls:pencil",
	});
}

export default Component;
