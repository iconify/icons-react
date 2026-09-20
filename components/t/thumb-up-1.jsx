import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrmu6m3lc.css';
import '../../css/b/bjxottbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lrmu6m3lc"/><path class="bjxottbic"/></g>`,
		"fallback": "tdesign:thumb-up-1",
	});
}

export default Component;
