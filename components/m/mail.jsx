import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sv2-ifb9o.css';
import '../../css/a/a-eh_xukr.css';
import '../../css/b/b6yfg8beb.css';
import '../../css/h/h7zbgbb3u.css';
import '../../css/g/g1ucr3bmw.css';
import '../../css/i/ia8v3n7td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sv2-ifb9o wm-shadow"/><path class="a-eh_xukr"/><path class="b6yfg8beb"/><path class="h7zbgbb3u"/><path class="g1ucr3bmw"/><path class="ia8v3n7td"/></g>`,
		"fallback": "withicons-retro:mail",
	});
}

export default Component;
