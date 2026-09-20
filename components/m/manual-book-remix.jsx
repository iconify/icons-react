import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac7e6ph4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ac7e6ph4q"/>`,
		"fallback": "streamline:manual-book-remix",
	});
}

export default Component;
