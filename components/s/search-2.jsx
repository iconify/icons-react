import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nns0k0bcj.css';
import '../../css/g/g7mt9ybuw.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nns0k0bcj"/><path clip-rule="evenodd" class="g7mt9ybuw"/>`,
		"fallback": "lineicons:search-2",
	});
}

export default Component;
