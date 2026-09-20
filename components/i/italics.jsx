import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my_i5-smp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my_i5-smp"/>`,
		"fallback": "pixel:italics",
	});
}

export default Component;
