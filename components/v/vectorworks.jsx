import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br7fvbb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br7fvbb-w"/>`,
		"fallback": "thesvg:vectorworks",
	});
}

export default Component;
