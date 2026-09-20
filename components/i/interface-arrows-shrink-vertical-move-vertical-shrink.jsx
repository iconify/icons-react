import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv60btb6h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv60btb6h"/>`,
		"fallback": "streamline:interface-arrows-shrink-vertical-move-vertical-shrink",
	});
}

export default Component;
