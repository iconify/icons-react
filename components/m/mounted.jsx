import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/q/q7_t6rbsc.css';
import '../../css/z/zxawc9bph.css';
import '../../css/f/fkrmm14ap.css';
import '../../css/i/i_hbqwbmk.css';
import '../../css/m/m2ojtibmq.css';
import '../../css/w/w4jltkmwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="q7_t6rbsc"/><path class="zxawc9bph"/><path class="fkrmm14ap"/><circle class="i_hbqwbmk"/><path class="m2ojtibmq"/><path class="w4jltkmwy"/></g>`,
		"fallback": "icon-park:mounted",
	});
}

export default Component;
