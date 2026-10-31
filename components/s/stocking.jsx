import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uy88ynb-c.css';
import '../../css/n/nsujc7b7z.css';
import '../../css/y/yjelvclql.css';
import '../../css/b/bmq_xw1uu.css';
import '../../css/q/q53ljtb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uy88ynb-c wm-shadow"/><path class="nsujc7b7z wm-shadow"/><path class="yjelvclql"/><path class="bmq_xw1uu"/><path class="q53ljtb5a"/></g>`,
		"fallback": "withicons-brutal:stocking",
	});
}

export default Component;
