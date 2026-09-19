import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px2j-5fim.css';
import '../../css/e/e3idh-b6l.css';
import '../../css/d/djebu4r4x.css';
import '../../css/n/no52ceyin.css';
import '../../css/j/j1jv3nb5v.css';
import '../../css/v/v2na_y4wh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="px2j-5fim"/><path class="e3idh-b6l"/><path class="djebu4r4x"/><path class="no52ceyin"/><path class="j1jv3nb5v"/><path class="v2na_y4wh"/></g>`,
		"fallback": "fluent-emoji-flat:notebook",
	});
}

export default Component;
