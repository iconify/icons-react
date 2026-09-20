import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2mqnrb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2mqnrb_p"/>`,
		"fallback": "thesvg-color:lintcode",
	});
}

export default Component;
