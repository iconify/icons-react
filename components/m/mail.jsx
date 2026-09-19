import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wejbc4bey.css';
import '../../css/a/acn2_0bmj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wejbc4bey"/><path class="acn2_0bmj"/></g>`,
		"fallback": "heroicons-solid:mail",
	});
}

export default Component;
