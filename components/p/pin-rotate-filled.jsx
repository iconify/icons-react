import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxg2wgbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nxg2wgbpc"/>`,
		"fallback": "reicon:pin-rotate-filled",
	});
}

export default Component;
