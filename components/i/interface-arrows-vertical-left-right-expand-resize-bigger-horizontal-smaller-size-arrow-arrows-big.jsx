import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue03v71pc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue03v71pc"/>`,
		"fallback": "streamline:interface-arrows-vertical-left-right-expand-resize-bigger-horizontal-smaller-size-arrow-arrows-big",
	});
}

export default Component;
