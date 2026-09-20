import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryc6sbc8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryc6sbc8p"/>`,
		"fallback": "meteor-icons:upload",
	});
}

export default Component;
