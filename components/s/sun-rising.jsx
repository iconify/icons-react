import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/g/gp600p.css';
import '../../css/i/i5k6wm.css';
import '../../css/j/j0_w7i.css';
import '../../css/d/d-ash02h.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-9_o5mj.css';
import '../../css/d/d-s9ijad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c gp600p"/><path class="a0m25c i5k6wm"/><path class="a0m25c j0_w7i"/>`,
		"fallback": "line-md:sun-rising",
	});
}

export default Component;
