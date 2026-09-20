import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6e5euaej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6e5euaej"/>`,
		"fallback": "streamline-sharp:paragraph-right-to-left-remix",
	});
}

export default Component;
