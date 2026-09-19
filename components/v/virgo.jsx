import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we9xwhb4l.css';
import '../../css/r/r6u96spbg.css';
import '../../css/a/ac-5uy-ae.css';
import '../../css/t/tg22mqbac.css';
import '../../css/p/p29ib2bhh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="we9xwhb4l"/><path class="r6u96spbg"/><path class="ac-5uy-ae"/><path class="tg22mqbac"/><path class="p29ib2bhh"/></g>`,
		"fallback": "icon-park-outline:virgo",
	});
}

export default Component;
