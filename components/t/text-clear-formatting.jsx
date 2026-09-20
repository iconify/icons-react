import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr4-vob_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr4-vob_p"/>`,
		"fallback": "proicons:text-clear-formatting",
	});
}

export default Component;
