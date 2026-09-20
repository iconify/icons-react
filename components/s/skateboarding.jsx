import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnvi2hutx.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnvi2hutx"/>`,
		"fallback": "temaki:skateboarding",
	});
}

export default Component;
