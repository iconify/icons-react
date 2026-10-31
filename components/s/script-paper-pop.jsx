import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/w/wb-79wbeq.css';
import '../../css/u/uem99k9gj.css';
import '../../css/b/bszb1ac5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="wb-79wbeq"/><path class="uem99k9gj"/><path class="bszb1ac5o"/></g>`,
		"fallback": "streamline-kameleon-color:script-paper-pop",
	});
}

export default Component;
