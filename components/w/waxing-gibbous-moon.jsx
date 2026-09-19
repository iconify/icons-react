import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7h6b0b1l.css';
import '../../css/l/lv__vebfx.css';
import '../../css/j/j3n0yip_u.css';
import '../../css/n/n90ulrb3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7h6b0b1l"/><path class="lv__vebfx"/><path class="j3n0yip_u"/><path class="n90ulrb3s"/></g>`,
		"fallback": "fluent-emoji-flat:waxing-gibbous-moon",
	});
}

export default Component;
