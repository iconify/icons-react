import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw85gbcmi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pw85gbcmi"/>`,
		"fallback": "streamline:signage-3-solid",
	});
}

export default Component;
