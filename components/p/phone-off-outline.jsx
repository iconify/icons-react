import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf4v8xbuk.css';
import '../../css/v/v8r068qjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf4v8xbuk"/><path clip-rule="evenodd" class="v8r068qjn"/>`,
		"fallback": "basil:phone-off-outline",
	});
}

export default Component;
