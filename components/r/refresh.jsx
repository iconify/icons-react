import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w7k0ltbfx.css';
import '../../css/a/aktchkbgk.css';
import '../../css/t/t6ljfcc4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="w7k0ltbfx"/><path class="aktchkbgk"/><path class="t6ljfcc4h"/></g>`,
		"fallback": "icon-park:refresh",
	});
}

export default Component;
