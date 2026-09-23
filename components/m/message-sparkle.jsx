import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-hg6ob5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-hg6ob5s"/>`,
		"fallback": "tabler:message-sparkle",
	});
}

export default Component;
