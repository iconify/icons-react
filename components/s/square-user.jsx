import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/z/zv6cqnbnp.css';
import '../../css/u/ujethrvji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="jhxi-trnl"/><circle class="zv6cqnbnp"/><path class="ujethrvji"/></g>`,
		"fallback": "lucide:square-user",
	});
}

export default Component;
