import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4rtmxbpo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w4rtmxbpo"/>`,
		"fallback": "streamline-flex:track-select-right-tool-remix",
	});
}

export default Component;
