import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxys4rbxx.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxys4rbxx"/>`,
		"fallback": "fontisto:vimeo",
	});
}

export default Component;
