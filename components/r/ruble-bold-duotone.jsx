import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zb2kedx8a.css';
import '../../css/p/pqvy7fbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zb2kedx8a"/><path class="pqvy7fbua"/></g>`,
		"fallback": "solar:ruble-bold-duotone",
	});
}

export default Component;
