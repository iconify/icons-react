import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv313ccnk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uv313ccnk"/>`,
		"fallback": "streamline-flex:pine-tree-remix",
	});
}

export default Component;
