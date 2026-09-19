import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibr21gb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibr21gb1u"/>`,
		"fallback": "hugeicons:property-edit",
	});
}

export default Component;
