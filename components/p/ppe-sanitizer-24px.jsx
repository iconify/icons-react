import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hevk1dboy.css';
import '../../css/k/kllcf0ego.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hevk1dboy"/><path class="kllcf0ego"/></g>`,
		"fallback": "healthicons:ppe-sanitizer-24px",
	});
}

export default Component;
