import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffrvd0_7x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffrvd0_7x"/>`,
		"fallback": "streamline:invisible-2-remix",
	});
}

export default Component;
