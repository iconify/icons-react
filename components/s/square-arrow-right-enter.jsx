import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g6sib8bgm.css';
import '../../css/o/olegm6hvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g6sib8bgm"/><path class="olegm6hvt"/></g>`,
		"fallback": "lucide:square-arrow-right-enter",
	});
}

export default Component;
