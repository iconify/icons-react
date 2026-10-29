import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/q/qtronmbrp.css';
import '../../css/q/qgs0z25hz.css';
import '../../css/d/d9p6bbcsl.css';
import '../../css/q/qv25c6b5t.css';
import '../../css/u/uvh1nac5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="qtronmbrp wm-k"/><path class="qgs0z25hz wm-k"/><path class="d9p6bbcsl wm-k"/><circle class="qv25c6b5t wm-s"/><path class="uvh1nac5v wm-s"/></g>`,
		"fallback": "withicons:tennis-blueprint",
	});
}

export default Component;
