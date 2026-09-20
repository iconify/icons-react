import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qc62tttlv.css';
import '../../css/h/hf1nobyvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qc62tttlv"/><path class="hf1nobyvc"/></g>`,
		"fallback": "reicon:redo-duotone",
	});
}

export default Component;
