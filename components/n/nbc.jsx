import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytg75cb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytg75cb6i"/>`,
		"fallback": "cbi:nbc",
	});
}

export default Component;
