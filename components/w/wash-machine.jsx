import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s-6837b2b.css';
import '../../css/b/bn4aif9mj.css';
import '../../css/r/rpm122kqc.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s-6837b2b"/><path class="bn4aif9mj"/><path class="rpm122kqc"/></g>`,
		"fallback": "si-glyph:wash-machine",
	});
}

export default Component;
