import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7jobn3po.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7jobn3po"/>`,
		"fallback": "pinhead:water-standpipe-with-motor-and-handle-and-drinking-glass",
	});
}

export default Component;
