import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvoaqteur.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvoaqteur"/>`,
		"fallback": "pinhead:map-pin-with-dot-above-outstretched-hand",
	});
}

export default Component;
