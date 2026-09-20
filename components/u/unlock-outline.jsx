import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvi86xbpl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvi86xbpl"/>`,
		"fallback": "lsicon:unlock-outline",
	});
}

export default Component;
