import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arlaqsboa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="arlaqsboa"/>`,
		"fallback": "streamline:sos-help-emergency-sign-remix",
	});
}

export default Component;
