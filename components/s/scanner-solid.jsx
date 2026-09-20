import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgjy1tmpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgjy1tmpk"/>`,
		"fallback": "streamline-sharp:scanner-solid",
	});
}

export default Component;
