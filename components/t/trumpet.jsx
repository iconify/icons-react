import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/h/huw2h1tfj.css';
import '../../css/r/r1to0idcl.css';
import '../../css/h/hz6hdesqo.css';
import '../../css/z/z-ekwr-ul.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="huw2h1tfj"/><path class="r1to0idcl"/><path class="hz6hdesqo"/><path class="z-ekwr-ul"/></g>`,
		"fallback": "icon-park:trumpet",
	});
}

export default Component;
