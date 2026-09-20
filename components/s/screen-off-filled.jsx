import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbf6qccau.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbf6qccau"/>`,
		"fallback": "lsicon:screen-off-filled",
	});
}

export default Component;
