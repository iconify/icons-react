import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l8acl6bbl.css';
import '../../css/e/e0x3z6bdm.css';
import '../../css/o/onca1cc_d.css';
import '../../css/e/eg32iv0xh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l8acl6bbl"/><path class="e0x3z6bdm"/><path class="onca1cc_d"/><path class="eg32iv0xh"/></g>`,
		"fallback": "streamline-flex-color:tape-cassette-record",
	});
}

export default Component;
