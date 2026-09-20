import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb5nd5bnv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb5nd5bnv"/>`,
		"fallback": "pinhead:utility-device-with-droplet",
	});
}

export default Component;
