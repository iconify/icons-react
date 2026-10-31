import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/l/ljegqebzp.css';
import '../../css/n/n0s27ybqh.css';
import '../../css/o/o-h11r68u.css';
import '../../css/o/ognwzilbq.css';
import '../../css/t/t8iz7bw7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="ljegqebzp"/><path class="n0s27ybqh"/><path class="o-h11r68u"/><path class="ognwzilbq"/><path class="t8iz7bw7z"/></g>`,
		"fallback": "withicons-retro:radar",
	});
}

export default Component;
