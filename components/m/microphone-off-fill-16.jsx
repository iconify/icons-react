import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5cz3ibue.css';
import '../../css/g/gk_j4gbvi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5cz3ibue"/><path class="gk_j4gbvi"/>`,
		"fallback": "garden:microphone-off-fill-16",
	});
}

export default Component;
