import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs4bnbc_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs4bnbc_h"/>`,
		"fallback": "fe:remove-cart",
	});
}

export default Component;
