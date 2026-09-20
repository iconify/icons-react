import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxf5f-bxr.css';
import '../../css/j/jb9pwtbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxf5f-bxr"/><path clip-rule="evenodd" class="jb9pwtbln"/>`,
		"fallback": "lineicons:message-3-text",
	});
}

export default Component;
