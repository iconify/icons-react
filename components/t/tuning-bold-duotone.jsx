import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jilftibdi.css';
import '../../css/t/tp3zyeb1a.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pfz_m4bgm.css';
import '../../css/u/ujlk92plo.css';
import '../../css/y/yyyzh212f.css';
import '../../css/a/anwwiub6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jilftibdi"/><path class="tp3zyeb1a"/><g class="xtpeb-edw"><path class="pfz_m4bgm"/><path class="ujlk92plo"/><path class="yyyzh212f"/><path class="anwwiub6y"/></g>`,
		"fallback": "solar:tuning-bold-duotone",
	});
}

export default Component;
