import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cu_0w0bkj.css';
import '../../css/x/xe9z6ccpt.css';
import '../../css/v/vbyvm5v7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cu_0w0bkj"/><path class="xe9z6ccpt"/><path class="vbyvm5v7p"/></g>`,
		"fallback": "flowbite:rotate-solid",
	});
}

export default Component;
