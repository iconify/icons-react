import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iorhqikzn.css';
import '../../css/m/mwv3ajbyz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iorhqikzn"/><path class="mwv3ajbyz"/></g>`,
		"fallback": "streamline-color:rss-square-flat",
	});
}

export default Component;
