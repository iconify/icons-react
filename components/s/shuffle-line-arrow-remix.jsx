import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwl0zd6sx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qwl0zd6sx"/>`,
		"fallback": "streamline-flex:shuffle-line-arrow-remix",
	});
}

export default Component;
