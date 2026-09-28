import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8-l8jbsp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8-l8jbsp"/>`,
		"fallback": "pinhead:phone-bottom-right-and-minus",
	});
}

export default Component;
