import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apr2eo5qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apr2eo5qt"/>`,
		"fallback": "coolicons:user-round",
	});
}

export default Component;
