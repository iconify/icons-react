import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agtx_2bxs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agtx_2bxs"/>`,
		"fallback": "garden:terminal-window-fill-16",
	});
}

export default Component;
