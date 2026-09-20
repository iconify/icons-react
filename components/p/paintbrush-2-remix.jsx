import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nujijkimx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nujijkimx"/>`,
		"fallback": "streamline-flex:paintbrush-2-remix",
	});
}

export default Component;
