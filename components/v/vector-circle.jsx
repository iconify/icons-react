import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhes_pini.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhes_pini"/>`,
		"fallback": "mdi:vector-circle",
	});
}

export default Component;
