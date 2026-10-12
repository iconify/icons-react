import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a7lal5baw.css';
import '../../css/m/mw66p5bqy.css';
import '../../css/s/s12xh-w7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a7lal5baw"/><path class="mw66p5bqy"/><path class="s12xh-w7d"/></g>`,
		"fallback": "andrsrxn:shuffle",
	});
}

export default Component;
