import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5rg4yowh.css';
import '../../css/n/nexfdi4-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5rg4yowh"/><path class="nexfdi4-g"/>`,
		"fallback": "mage:paypal",
	});
}

export default Component;
