import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_izhyj8i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_izhyj8i"/>`,
		"fallback": "pinhead:pin-pad-with-yen-yuan",
	});
}

export default Component;
