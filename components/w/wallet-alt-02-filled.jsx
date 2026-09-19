import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnune9bif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bnune9bif"/>`,
		"fallback": "griddy-icons:wallet-alt-02-filled",
	});
}

export default Component;
