import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjbg4zucq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjbg4zucq"/>`,
		"fallback": "streamline:interface-arrows-horizontal-expand-expand-resize-bigger-horizontal-smaller-size-arrow-arrows-big",
	});
}

export default Component;
