import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxdr_ubpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hxdr_ubpm"/>`,
		"fallback": "streamline-sharp:lens-remix",
	});
}

export default Component;
