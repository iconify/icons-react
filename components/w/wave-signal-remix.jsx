import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8ozen0hv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8ozen0hv"/>`,
		"fallback": "streamline:wave-signal-remix",
	});
}

export default Component;
