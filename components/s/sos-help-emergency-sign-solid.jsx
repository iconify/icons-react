import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma1d8gb-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ma1d8gb-b"/>`,
		"fallback": "streamline:sos-help-emergency-sign-solid",
	});
}

export default Component;
