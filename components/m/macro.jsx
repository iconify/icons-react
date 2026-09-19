import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4rgmabsq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4rgmabsq"/>`,
		"fallback": "whh:macro",
	});
}

export default Component;
