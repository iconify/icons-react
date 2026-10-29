import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/guup01bmw.css';
import '../../css/u/uhc76--hq.css';
import '../../css/d/dyo429x_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="guup01bmw"/><path class="uhc76--hq wm-a"/><path class="dyo429x_t"/></g>`,
		"fallback": "withicons:shopping-bag-duo",
	});
}

export default Component;
