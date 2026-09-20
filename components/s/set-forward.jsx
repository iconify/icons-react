import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tizo82bri.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tizo82bri"/>`,
		"fallback": "jam:set-forward",
	});
}

export default Component;
