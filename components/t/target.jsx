import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/q/qf0548juu.css';
import '../../css/n/n3zz7-35t.css';
import '../../css/e/e7oacdc0l.css';
import '../../css/b/b9hup7bii.css';
import '../../css/k/kz7hh8bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="qf0548juu"/><path class="n3zz7-35t"/><path class="e7oacdc0l"/><path class="b9hup7bii"/><path class="kz7hh8bzt"/></g>`,
		"fallback": "withicons-retro:target",
	});
}

export default Component;
