import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndxi90rdc.css';
import '../../css/z/zanv-rbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ndxi90rdc"/><path class="zanv-rbfh"/></g>`,
		"fallback": "tdesign:star-1",
	});
}

export default Component;
