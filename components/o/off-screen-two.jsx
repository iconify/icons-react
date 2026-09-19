import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zqb2dfb7j.css';
import '../../css/m/m7j9c9bcj.css';
import '../../css/d/dkr0sjjql.css';
import '../../css/f/fb12-5bwx.css';
import '../../css/q/qb87-k4qw.css';
import '../../css/r/rm09j9qby.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zqb2dfb7j"/><path class="m7j9c9bcj"/><path class="dkr0sjjql"/><path class="fb12-5bwx"/><path class="qb87-k4qw"/><path class="rm09j9qby"/></g>`,
		"fallback": "icon-park:off-screen-two",
	});
}

export default Component;
