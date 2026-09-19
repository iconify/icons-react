import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwah2gwwx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwah2gwwx"/>`,
		"fallback": "game-icons:sound-waves",
	});
}

export default Component;
