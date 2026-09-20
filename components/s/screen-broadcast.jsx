import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2797jbnr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2797jbnr"/>`,
		"fallback": "streamline-flex:screen-broadcast",
	});
}

export default Component;
