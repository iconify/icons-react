import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw_sm9b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw_sm9b6n"/>`,
		"fallback": "simple-icons:mocha",
	});
}

export default Component;
