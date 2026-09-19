import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdz9vxb_n.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdz9vxb_n"/>`,
		"fallback": "ps:sound-plus",
	});
}

export default Component;
