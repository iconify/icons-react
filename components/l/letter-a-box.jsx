import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b559-z69b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b559-z69b"/>`,
		"fallback": "mdi:letter-a-box",
	});
}

export default Component;
