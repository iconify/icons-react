import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imw18uqpy.css';
import '../../css/i/ijr721b7b.css';
import '../../css/q/qhj_yo_sl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imw18uqpy"/><path clip-rule="evenodd" class="ijr721b7b"/><path class="qhj_yo_sl"/></g>`,
		"fallback": "icon-park:lark-one",
	});
}

export default Component;
