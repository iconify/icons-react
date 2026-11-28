import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bolmgdbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bolmgdbau"/>`,
		"fallback": "noviair-light:server-plus",
	});
}

export default Component;
