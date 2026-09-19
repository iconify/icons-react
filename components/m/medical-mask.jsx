import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x19w_acyj.css';
import '../../css/v/vpd7rkvil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x19w_acyj"/><path class="vpd7rkvil"/>`,
		"fallback": "circum:medical-mask",
	});
}

export default Component;
