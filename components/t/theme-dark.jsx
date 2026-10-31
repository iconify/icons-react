import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7u8bpwwu.css';
import '../../css/x/xu6fxhcyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g7u8bpwwu"/><path class="xu6fxhcyf"/></g>`,
		"fallback": "struq:theme-dark",
	});
}

export default Component;
