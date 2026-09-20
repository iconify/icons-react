import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9hw7ehsm.css';
import '../../css/g/g9h7rdbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9hw7ehsm"/><path class="g9h7rdbkj"/>`,
		"fallback": "prime:link",
	});
}

export default Component;
