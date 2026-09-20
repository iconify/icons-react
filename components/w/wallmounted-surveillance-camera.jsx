import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk274hgmw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk274hgmw"/>`,
		"fallback": "pinhead:wallmounted-surveillance-camera",
	});
}

export default Component;
