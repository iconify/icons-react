import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5b2vhb1t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5b2vhb1t"/>`,
		"fallback": "streamline:one-finger-drag-vertical",
	});
}

export default Component;
