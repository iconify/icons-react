import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x03ow4b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x03ow4b4k"/>`,
		"fallback": "streamline-sharp:office-building-2",
	});
}

export default Component;
