import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p822k3b6o.css';

const viewBox = {"width":1792,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p822k3b6o"/>`,
		"fallback": "vs:neko",
	});
}

export default Component;
