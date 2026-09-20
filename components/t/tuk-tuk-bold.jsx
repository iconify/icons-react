import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akbtmrwds.css';
import '../../css/u/u4qkj_7ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akbtmrwds"/><path class="u4qkj_7ef"/>`,
		"fallback": "streamline-ultimate:tuk-tuk-bold",
	});
}

export default Component;
