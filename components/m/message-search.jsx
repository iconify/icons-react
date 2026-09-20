import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9_f99rgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9_f99rgu"/>`,
		"fallback": "tabler:message-search",
	});
}

export default Component;
