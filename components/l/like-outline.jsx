import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfb60tb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qfb60tb4a"/>`,
		"fallback": "basil:like-outline",
	});
}

export default Component;
