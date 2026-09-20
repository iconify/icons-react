import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddlerbc9s.css';
import '../../css/w/w158vz8lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddlerbc9s"/><path class="w158vz8lp"/>`,
		"fallback": "stash:plan",
	});
}

export default Component;
