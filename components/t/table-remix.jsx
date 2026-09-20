import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgtb5dhkt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgtb5dhkt"/>`,
		"fallback": "streamline-flex:table-remix",
	});
}

export default Component;
