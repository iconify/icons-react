import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbyx4lb9c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbyx4lb9c"/>`,
		"fallback": "whh:plaque",
	});
}

export default Component;
