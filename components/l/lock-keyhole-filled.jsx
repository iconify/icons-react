import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgo5q3yca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wgo5q3yca"/>`,
		"fallback": "reicon:lock-keyhole-filled",
	});
}

export default Component;
