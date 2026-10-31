import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/d/d6kg_nb4c.css';
import '../../css/w/wjvj2cbdi.css';
import '../../css/g/g_ic7mb0e.css';
import '../../css/c/cgadf3bdd.css';
import '../../css/e/e60bxztwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="d6kg_nb4c"/><path class="wjvj2cbdi"/><path class="g_ic7mb0e"/><path class="cgadf3bdd"/><path class="e60bxztwc"/></g>`,
		"fallback": "withicons-retro:laugh",
	});
}

export default Component;
