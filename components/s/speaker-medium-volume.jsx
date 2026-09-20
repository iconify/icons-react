import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqogompia.css';
import '../../css/x/xx8n1_bzj.css';
import '../../css/z/z04drlb1l.css';
import '../../css/p/p6bmezxmc.css';
import '../../css/p/p1dxmr8pc.css';
import '../../css/e/edh22lbnq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqogompia"/><path class="xx8n1_bzj"/><g class="z04drlb1l"><path class="p6bmezxmc"/><path class="p1dxmr8pc"/><path class="edh22lbnq"/></g>`,
		"fallback": "openmoji:speaker-medium-volume",
	});
}

export default Component;
