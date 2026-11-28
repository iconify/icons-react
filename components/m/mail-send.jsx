import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cw6wvybnf.css';
import '../../css/n/nlss26bwx.css';
import '../../css/r/rb1ysv58h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cw6wvybnf"/><path class="nlss26bwx"/><path class="rb1ysv58h"/></g>`,
		"fallback": "lucide:mail-send",
	});
}

export default Component;
