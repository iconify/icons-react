import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htv5wib5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htv5wib5m"/>`,
		"fallback": "keyline-icons:messages-sharp-fill",
	});
}

export default Component;
