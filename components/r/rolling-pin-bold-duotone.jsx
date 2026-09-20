import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8vvbt4bq.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/tnpmw8b7u.css';
import '../../css/e/e8344vbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8vvbt4bq"/><g class="mc2zb0bvp"><path class="tnpmw8b7u"/><path class="e8344vbai"/></g></g>`,
		"fallback": "solar:rolling-pin-bold-duotone",
	});
}

export default Component;
