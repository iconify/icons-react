import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8ywor6vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8ywor6vn"/>`,
		"fallback": "griddy-icons:tooth-fissure-sealing",
	});
}

export default Component;
