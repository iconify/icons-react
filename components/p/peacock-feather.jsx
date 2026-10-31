import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b9v2r3b5c.css';
import '../../css/e/ecrul3biy.css';
import '../../css/t/tzf16xm0i.css';
import '../../css/v/v-ytw7mjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b9v2r3b5c wm-shadow"/><path class="ecrul3biy wm-shadow"/><path class="tzf16xm0i"/><path class="v-ytw7mjk"/></g>`,
		"fallback": "withicons-brutal:peacock-feather",
	});
}

export default Component;
