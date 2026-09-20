import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oembw3b6n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oembw3b6n"/>`,
		"fallback": "pinhead:kerb-lowered-under-shoe",
	});
}

export default Component;
