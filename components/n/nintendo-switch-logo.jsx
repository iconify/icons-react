import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osn55wydk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osn55wydk"/>`,
		"fallback": "cbi:nintendo-switch-logo",
	});
}

export default Component;
