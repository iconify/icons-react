import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/araq3t5cx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="araq3t5cx"/>`,
		"fallback": "pinhead:utility-device-with-gas-flame",
	});
}

export default Component;
