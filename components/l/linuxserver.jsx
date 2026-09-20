import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnoy0zbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnoy0zbdk"/>`,
		"fallback": "thesvg-color:linuxserver",
	});
}

export default Component;
