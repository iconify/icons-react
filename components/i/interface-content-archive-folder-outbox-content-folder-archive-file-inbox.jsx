import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqha5oyiz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqha5oyiz"/>`,
		"fallback": "streamline:interface-content-archive-folder-outbox-content-folder-archive-file-inbox",
	});
}

export default Component;
