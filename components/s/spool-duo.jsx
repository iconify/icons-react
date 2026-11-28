import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s9oia2b_v.css';
import '../../css/u/uyvngfbfq.css';
import '../../css/i/icc1xllss.css';
import '../../css/h/hfjk0d7lg.css';
import '../../css/r/rgchuhbnm.css';
import '../../css/r/r7td4jbtx.css';
import '../../css/n/nbaccmbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s9oia2b_v"/><path class="uyvngfbfq"/><path class="icc1xllss"/><path class="hfjk0d7lg"/><path class="rgchuhbnm"/><path class="r7td4jbtx"/><path class="nbaccmbzw"/></g>`,
		"fallback": "iconaut:spool-duo",
	});
}

export default Component;
