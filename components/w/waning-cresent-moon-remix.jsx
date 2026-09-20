import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgyzkzbbc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgyzkzbbc"/>`,
		"fallback": "streamline:waning-cresent-moon-remix",
	});
}

export default Component;
