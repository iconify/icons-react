import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxfw2ll-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxfw2ll-c"/>`,
		"fallback": "bxl:prisma-orm",
	});
}

export default Component;
