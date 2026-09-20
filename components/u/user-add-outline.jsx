import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxh27cc0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxh27cc0a"/>`,
		"fallback": "typcn:user-add-outline",
	});
}

export default Component;
