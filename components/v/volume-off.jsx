import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cli20kbwu.css';
import '../../css/y/yzczqv36v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="cli20kbwu"/><path class="yzczqv36v"/></g>`,
		"fallback": "heroicons-outline:volume-off",
	});
}

export default Component;
