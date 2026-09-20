import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohrxk9kdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohrxk9kdf"/>`,
		"fallback": "ri:robot-3-fill",
	});
}

export default Component;
