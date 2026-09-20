import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g33z5clin.css';
import '../../css/b/b-ilb_bph.css';
import '../../css/z/z9yi973cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g33z5clin"/><path class="b-ilb_bph"/><path class="z9yi973cc"/></g>`,
		"fallback": "tdesign:share",
	});
}

export default Component;
