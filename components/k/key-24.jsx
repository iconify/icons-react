import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wov6qjbrb.css';
import '../../css/k/kx5tz624c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wov6qjbrb"/><path class="kx5tz624c"/>`,
		"fallback": "octicon:key-24",
	});
}

export default Component;
