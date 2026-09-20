import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvp0xpbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kvp0xpbst"/>`,
		"fallback": "streamline-sharp:virus-antivirus-remix",
	});
}

export default Component;
