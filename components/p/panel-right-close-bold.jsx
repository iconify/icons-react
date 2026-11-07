import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojtd7k2go.css';
import '../../css/d/dkbffkbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ojtd7k2go"/><path class="dkbffkbiu"/>`,
		"fallback": "solar:panel-right-close-bold",
	});
}

export default Component;
