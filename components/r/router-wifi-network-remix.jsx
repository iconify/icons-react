import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-qy-mbpg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p-qy-mbpg"/>`,
		"fallback": "streamline-flex:router-wifi-network-remix",
	});
}

export default Component;
