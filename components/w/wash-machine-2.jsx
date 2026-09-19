import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/ft77-ebzx.css';
import '../../css/q/qc9eehbrm.css';
import '../../css/c/cqogv-bcd.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ft77-ebzx"/><path class="qc9eehbrm"/><path class="cqogv-bcd"/></g>`,
		"fallback": "si-glyph:wash-machine-2",
	});
}

export default Component;
