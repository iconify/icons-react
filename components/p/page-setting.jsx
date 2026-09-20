import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zse101bvh.css';
import '../../css/u/uzn8edcpa.css';
import '../../css/t/twgjracvu.css';
import '../../css/t/tjx3ewbek.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zse101bvh"/><path class="uzn8edcpa"/><path class="twgjracvu"/><path class="tjx3ewbek"/></g>`,
		"fallback": "streamline-color:page-setting",
	});
}

export default Component;
