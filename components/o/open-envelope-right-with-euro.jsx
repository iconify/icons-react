import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j32nkob6m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j32nkob6m"/>`,
		"fallback": "pinhead:open-envelope-right-with-euro",
	});
}

export default Component;
