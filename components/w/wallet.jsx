import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nrdqqvb8d.css';
import '../../css/g/gu2lzjbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nrdqqvb8d"/><path class="gu2lzjbzh"/></g>`,
		"fallback": "akar-icons:wallet",
	});
}

export default Component;
