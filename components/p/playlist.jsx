import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgffi2p2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgffi2p2b"/>`,
		"fallback": "mage:playlist",
	});
}

export default Component;
