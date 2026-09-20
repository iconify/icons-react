import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dgf-cvvxa.css';
import '../../css/q/q5ovy0bkw.css';
import '../../css/g/gka1v-_ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dgf-cvvxa"/><path class="q5ovy0bkw"/><path class="gka1v-_ox"/></g>`,
		"fallback": "solar:panels-top-left-bold-duotone",
	});
}

export default Component;
