import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llsy4sbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llsy4sbxc"/>`,
		"fallback": "reicon:map-alt-filled",
	});
}

export default Component;
