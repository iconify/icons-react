import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1-gtbbnj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1-gtbbnj"/>`,
		"fallback": "streamline:store-1-remix",
	});
}

export default Component;
