import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qep74_b1g.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qep74_b1g"/>`,
		"fallback": "jam:picture",
	});
}

export default Component;
