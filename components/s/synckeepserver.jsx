import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xryhtba0n.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xryhtba0n"/>`,
		"fallback": "whh:synckeepserver",
	});
}

export default Component;
