import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kotd2wpwx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kotd2wpwx"/>`,
		"fallback": "garden:terminal-window-stroke-16",
	});
}

export default Component;
