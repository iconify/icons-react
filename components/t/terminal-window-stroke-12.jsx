import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egjdr5bch.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egjdr5bch"/>`,
		"fallback": "garden:terminal-window-stroke-12",
	});
}

export default Component;
