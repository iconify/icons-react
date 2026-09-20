import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b10v80bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b10v80bpx"/>`,
		"fallback": "streamline-sharp:module-puzzle-2-remix",
	});
}

export default Component;
