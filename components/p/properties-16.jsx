import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhhrt9b6q.css';
import '../../css/o/o1l-bgbhb.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhhrt9b6q"/><path clip-rule="evenodd" class="o1l-bgbhb"/>`,
		"fallback": "qlementine-icons:properties-16",
	});
}

export default Component;
