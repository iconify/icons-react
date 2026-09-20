import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc3vo21sg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pc3vo21sg"/>`,
		"fallback": "streamline-flex:search-history-browser-remix",
	});
}

export default Component;
