import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twame7b2s.css';
import '../../css/n/ntktmybvj.css';
import '../../css/y/yd6eqqbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="twame7b2s"/><path class="ntktmybvj"/><path clip-rule="evenodd" class="yd6eqqbsn"/></g>`,
		"fallback": "reicon:user-check2",
	});
}

export default Component;
