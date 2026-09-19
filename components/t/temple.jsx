import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq3m62bxk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq3m62bxk"/>`,
		"fallback": "whh:temple",
	});
}

export default Component;
