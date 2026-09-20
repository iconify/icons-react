import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am09x4voc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="am09x4voc"/>`,
		"fallback": "mingcute:new-folder-fill",
	});
}

export default Component;
