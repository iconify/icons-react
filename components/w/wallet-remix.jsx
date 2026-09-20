import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4evi6bab.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4evi6bab"/>`,
		"fallback": "streamline-flex:wallet-remix",
	});
}

export default Component;
