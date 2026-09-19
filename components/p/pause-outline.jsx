import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9p3ynbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p9p3ynbre"/>`,
		"fallback": "basil:pause-outline",
	});
}

export default Component;
