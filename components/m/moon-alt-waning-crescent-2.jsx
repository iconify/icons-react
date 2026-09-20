import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2p6chu2p.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2p6chu2p"/>`,
		"fallback": "wi:moon-alt-waning-crescent-2",
	});
}

export default Component;
