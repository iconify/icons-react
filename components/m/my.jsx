import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqwf-7vsq.css';
import '../../css/n/nmmrovbyv.css';
import '../../css/t/tv10vqcvc.css';
import '../../css/l/l36zp4b5z.css';
import '../../css/v/vcxyiaban.css';
import '../../css/q/qlft06buj.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wqwf-7vsq"/><path class="nmmrovbyv"/><path clip-rule="evenodd" class="tv10vqcvc"/><path clip-rule="evenodd" class="l36zp4b5z"/><path clip-rule="evenodd" class="vcxyiaban"/><path clip-rule="evenodd" class="qlft06buj"/></g>`,
		"fallback": "flagpack:my",
	});
}

export default Component;
