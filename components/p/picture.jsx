import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p29z2yvcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p29z2yvcx"/>`,
		"fallback": "mdi-light:picture",
	});
}

export default Component;
