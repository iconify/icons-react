import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzxstkb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzxstkb2r"/>`,
		"fallback": "mdi:printer-point-of-sale-cog",
	});
}

export default Component;
