import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_8ujabwt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_8ujabwt"/>`,
		"fallback": "fa7-solid:shuttle-space",
	});
}

export default Component;
