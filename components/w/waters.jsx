import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vds7mfb_u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vds7mfb_u"/>`,
		"fallback": "pinhead:waters",
	});
}

export default Component;
