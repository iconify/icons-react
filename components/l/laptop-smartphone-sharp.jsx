import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg2sg0nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg2sg0nmw"/>`,
		"fallback": "keyline-icons:laptop-smartphone-sharp",
	});
}

export default Component;
