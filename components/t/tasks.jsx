import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xey_w_xxq.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xey_w_xxq"/>`,
		"fallback": "whh:tasks",
	});
}

export default Component;
