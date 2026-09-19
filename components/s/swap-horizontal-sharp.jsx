import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbjiaxbnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbjiaxbnn"/>`,
		"fallback": "famicons:swap-horizontal-sharp",
	});
}

export default Component;
