import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/to0g5fatr.css';
import '../../css/w/wsep67b4p.css';
import '../../css/i/imyc303dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="to0g5fatr"/><path class="wsep67b4p"/><path class="imyc303dg"/></g>`,
		"fallback": "hugeicons:lighthouse",
	});
}

export default Component;
