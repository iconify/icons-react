import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocfb4fboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ocfb4fboi"/>`,
		"fallback": "reicon:transfer-v",
	});
}

export default Component;
