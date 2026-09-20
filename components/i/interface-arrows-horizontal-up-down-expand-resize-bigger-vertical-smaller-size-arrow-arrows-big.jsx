import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j96f-ebaa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j96f-ebaa"/>`,
		"fallback": "streamline:interface-arrows-horizontal-up-down-expand-resize-bigger-vertical-smaller-size-arrow-arrows-big",
	});
}

export default Component;
