import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jej-03bee.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jej-03bee"/>`,
		"fallback": "streamline:vr-headset-1-solid",
	});
}

export default Component;
