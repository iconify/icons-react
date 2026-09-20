import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2lnfbf4i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2lnfbf4i"/>`,
		"fallback": "thesvg-color:r-dark",
	});
}

export default Component;
