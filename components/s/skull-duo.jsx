import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gg9qschrj.css';
import '../../css/w/w3qnxqbjy.css';
import '../../css/t/tjbgnmb3g.css';
import '../../css/o/oum2fkb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gg9qschrj"/><path class="w3qnxqbjy wm-a"/><path class="tjbgnmb3g"/><path class="oum2fkb0t wm-a"/></g>`,
		"fallback": "withicons:skull-duo",
	});
}

export default Component;
