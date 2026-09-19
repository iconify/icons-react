import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0rocyc2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0rocyc2g"/>`,
		"fallback": "icon-park-outline:message-failed",
	});
}

export default Component;
