import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o04t7ctoj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o04t7ctoj"/>`,
		"fallback": "streamline:interface-arrows-downleft-corner-arrow-corner-down-left-downleft",
	});
}

export default Component;
