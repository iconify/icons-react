import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xsxefibul.css';
import '../../css/o/oysvhqbff.css';
import '../../css/a/aa3pg6tfa.css';
import '../../css/z/z9siq2ywd.css';
import '../../css/w/w4wk9jarw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xsxefibul"/><path class="oysvhqbff"/><path class="aa3pg6tfa"/><path class="z9siq2ywd"/><path class="w4wk9jarw"/></g>`,
		"fallback": "withicons-retro:radio",
	});
}

export default Component;
