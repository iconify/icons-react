import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3bxkfujr.css';
import '../../css/p/pb-qxi-fw.css';
import '../../css/s/sd_je82ls.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w3bxkfujr"/><path clip-rule="evenodd" class="pb-qxi-fw"/><path class="sd_je82ls"/></g>`,
		"fallback": "streamline-flex-color:screenshot-flat",
	});
}

export default Component;
