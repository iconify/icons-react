import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juv1l2bcg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="juv1l2bcg"/>`,
		"fallback": "streamline:text-flow-rows-remix",
	});
}

export default Component;
