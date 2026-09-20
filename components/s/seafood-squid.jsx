import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ai7y2sbdw.css';
import '../../css/u/u9b-vyu7r.css';
import '../../css/y/yanzugb6c.css';
import '../../css/j/j05p5bbyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ai7y2sbdw"/><path class="u9b-vyu7r"/><path class="yanzugb6c"/><path class="j05p5bbyq"/></g>`,
		"fallback": "streamline-ultimate-color:seafood-squid",
	});
}

export default Component;
