import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yev4qwb7t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yev4qwb7t"/>`,
		"fallback": "streamline-flex:investing-and-banking-remix",
	});
}

export default Component;
