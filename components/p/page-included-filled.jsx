import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgv6h9b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgv6h9b2c"/>`,
		"fallback": "tdesign:page-included-filled",
	});
}

export default Component;
