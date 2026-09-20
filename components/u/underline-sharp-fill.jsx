import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl8fs8f5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl8fs8f5c"/>`,
		"fallback": "keyline-icons:underline-sharp-fill",
	});
}

export default Component;
