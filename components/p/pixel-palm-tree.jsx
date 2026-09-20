import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw3nfyb4v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw3nfyb4v"/>`,
		"fallback": "pinhead:pixel-palm-tree",
	});
}

export default Component;
