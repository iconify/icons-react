import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl161n-1i.css';
import '../../css/f/fgm3acnse.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cl161n-1i"/><path class="fgm3acnse"/>`,
		"fallback": "fxemoji:sidewaysrightpointingindex",
	});
}

export default Component;
