import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eobp_3bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eobp_3bxf"/>`,
		"fallback": "pixelarticons:letter-y",
	});
}

export default Component;
