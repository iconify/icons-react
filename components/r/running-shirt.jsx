import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/exxl5jkdu.css';
import '../../css/s/smmrjzb2f.css';
import '../../css/u/uj-a5jb7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="exxl5jkdu"/><path class="smmrjzb2f"/><path class="uj-a5jb7c"/></g>`,
		"fallback": "fluent-emoji-flat:running-shirt",
	});
}

export default Component;
