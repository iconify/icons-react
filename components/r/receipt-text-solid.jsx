import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxhdtb-6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxhdtb-6f"/>`,
		"fallback": "withicons:receipt-text-solid",
	});
}

export default Component;
