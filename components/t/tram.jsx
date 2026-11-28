import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/de1sdh_kc.css';
import '../../css/a/at_mvuoky.css';
import '../../css/o/okv086asm.css';
import '../../css/l/lkof9guxz.css';
import '../../css/g/g83zm2etw.css';
import '../../css/r/rwey-0bil.css';
import '../../css/p/ppi4wnv8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="de1sdh_kc"/><path class="at_mvuoky"/><path class="okv086asm"/><path class="lkof9guxz"/><path class="g83zm2etw"/><path class="rwey-0bil"/><path class="ppi4wnv8w"/></g>`,
		"fallback": "iconaut:tram",
	});
}

export default Component;
