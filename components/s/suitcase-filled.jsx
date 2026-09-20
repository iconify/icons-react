import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr0pr52nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pr0pr52nb"/>`,
		"fallback": "reicon:suitcase-filled",
	});
}

export default Component;
