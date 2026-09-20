import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpgyb1h7l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpgyb1h7l"/>`,
		"fallback": "streamline:interface-arrows-expand-diagonal-1-expand-resize-bigger-diagonal-smaller-size-arrow-arrows-big",
	});
}

export default Component;
