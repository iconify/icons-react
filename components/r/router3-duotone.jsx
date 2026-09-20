import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wk5gwigjj.css';
import '../../css/r/rfvd0pb3r.css';
import '../../css/y/yzh4tmb2w.css';
import '../../css/n/nz1pi9f1a.css';
import '../../css/r/rq8mrd41t.css';
import '../../css/f/fhn8kobqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wk5gwigjj"/><path clip-rule="evenodd" class="rfvd0pb3r"/><path class="yzh4tmb2w"/><path clip-rule="evenodd" class="nz1pi9f1a"/><path clip-rule="evenodd" class="rq8mrd41t"/><path class="fhn8kobqw"/></g>`,
		"fallback": "reicon:router3-duotone",
	});
}

export default Component;
