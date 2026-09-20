import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2p9unbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i2p9unbwn"/>`,
		"fallback": "streamline-sharp:repeat-single-solid",
	});
}

export default Component;
