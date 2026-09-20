import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/orcc3n9gi.css';
import '../../css/y/ytpmt_bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="orcc3n9gi"/><path class="ytpmt_bxk"/></g>`,
		"fallback": "lucide:mail-x",
	});
}

export default Component;
