import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0oqi0odq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0oqi0odq"/>`,
		"fallback": "maki:lighthouse-jp",
	});
}

export default Component;
