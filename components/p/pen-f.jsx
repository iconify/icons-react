import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tly_ixbgg.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tly_ixbgg"/>`,
		"fallback": "jam:pen-f",
	});
}

export default Component;
