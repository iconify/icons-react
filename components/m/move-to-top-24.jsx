import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyqr6ubaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyqr6ubaz"/>`,
		"fallback": "octicon:move-to-top-24",
	});
}

export default Component;
