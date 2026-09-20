import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0d62rbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j0d62rbju"/>`,
		"fallback": "streamline-sharp:rate-stretch-tool-remix",
	});
}

export default Component;
