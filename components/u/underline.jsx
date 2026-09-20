import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3_en-bkc.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3_en-bkc"/>`,
		"fallback": "lineicons:underline",
	});
}

export default Component;
