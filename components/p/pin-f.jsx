import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvibj51bk.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvibj51bk"/>`,
		"fallback": "jam:pin-f",
	});
}

export default Component;
