import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w511s810q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w511s810q"/>`,
		"fallback": "streamline-flex:landscape-2-remix",
	});
}

export default Component;
