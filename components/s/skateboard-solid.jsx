import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7-iz7mlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7-iz7mlv"/>`,
		"fallback": "iconaut:skateboard-solid",
	});
}

export default Component;
