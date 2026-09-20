import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss-50dc0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ss-50dc0b"/>`,
		"fallback": "streamline-flex-color:sos-help-emergency-sign-flat",
	});
}

export default Component;
