import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf06j_bww.css';
import '../../css/r/rsco9dbox.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf06j_bww"/><path class="rsco9dbox"/>`,
		"fallback": "streamline-pixel:interface-essential-skull-2",
	});
}

export default Component;
