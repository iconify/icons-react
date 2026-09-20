import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eirwd2-9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eirwd2-9z"/>`,
		"fallback": "streamline-freehand:monetization-mouse",
	});
}

export default Component;
