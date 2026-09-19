import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm9sx5blr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm9sx5blr"/>`,
		"fallback": "fad:waveform",
	});
}

export default Component;
