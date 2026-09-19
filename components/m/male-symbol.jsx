import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssu_i655x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssu_i655x"/>`,
		"fallback": "hugeicons:male-symbol",
	});
}

export default Component;
