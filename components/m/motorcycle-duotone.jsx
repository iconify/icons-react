import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gz_pyjrgo.css';
import '../../css/b/bffijgbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gz_pyjrgo secondary"/><path class="bffijgbwt primary"/></g>`,
		"fallback": "iconaut:motorcycle-duotone",
	});
}

export default Component;
