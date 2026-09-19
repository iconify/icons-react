import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbfxk0b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbfxk0b-c"/>`,
		"fallback": "hugeicons:shaka-03",
	});
}

export default Component;
