import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti3fx-b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti3fx-b7f"/>`,
		"fallback": "thesvg:uptime-kuma",
	});
}

export default Component;
