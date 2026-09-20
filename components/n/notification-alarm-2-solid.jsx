import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-xcio3ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r-xcio3ii"/>`,
		"fallback": "streamline-sharp:notification-alarm-2-solid",
	});
}

export default Component;
