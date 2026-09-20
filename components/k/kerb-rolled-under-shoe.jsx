import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owpzdlbkl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owpzdlbkl"/>`,
		"fallback": "pinhead:kerb-rolled-under-shoe",
	});
}

export default Component;
