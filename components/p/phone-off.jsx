import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5wc5cr_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5wc5cr_o"/>`,
		"fallback": "tabler:phone-off",
	});
}

export default Component;
