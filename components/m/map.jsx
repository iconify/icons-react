import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjv7omb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjv7omb2j"/>`,
		"fallback": "keyline-icons:map",
	});
}

export default Component;
