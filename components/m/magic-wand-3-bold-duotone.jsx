import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/pih3221qt.css';
import '../../css/c/c3iyeebaf.css';
import '../../css/r/r03geaczj.css';
import '../../css/x/x0524kbeg.css';
import '../../css/j/jtqo9f0fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="pih3221qt"/><path class="c3iyeebaf"/><path class="r03geaczj"/><path class="x0524kbeg"/></g><path class="jtqo9f0fk"/></g>`,
		"fallback": "solar:magic-wand-3-bold-duotone",
	});
}

export default Component;
