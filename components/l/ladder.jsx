import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx8vj2brj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx8vj2brj"/>`,
		"fallback": "picon:ladder",
	});
}

export default Component;
