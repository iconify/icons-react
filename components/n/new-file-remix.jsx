import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqpg7wbgs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yqpg7wbgs"/>`,
		"fallback": "streamline-flex:new-file-remix",
	});
}

export default Component;
