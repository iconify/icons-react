import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gihrh7xqo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gihrh7xqo"/>`,
		"fallback": "streamline:interface-arrows-vertical-expand-2-expand-resize-bigger-vertical-smaller-size-arrow-arrows-big",
	});
}

export default Component;
