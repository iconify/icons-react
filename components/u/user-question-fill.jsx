import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9dz9xb2q.css';
import '../../css/y/yqmoletoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9dz9xb2q"/><path clip-rule="evenodd" class="yqmoletoa"/>`,
		"fallback": "mingcute:user-question-fill",
	});
}

export default Component;
