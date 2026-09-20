import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy_v_9b1z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy_v_9b1z"/>`,
		"fallback": "pinhead:person-climbing-on-climbing-frame",
	});
}

export default Component;
