import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smnye9b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smnye9b4l"/>`,
		"fallback": "keyline-icons:terminal-asterisk-sharp-fill",
	});
}

export default Component;
