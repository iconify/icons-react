import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upo6hjb2i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upo6hjb2i"/>`,
		"fallback": "pinhead:lungs-with-right-side-spots",
	});
}

export default Component;
