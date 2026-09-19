import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a-cu8w8vw.css';
import '../../css/z/zjso7bb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a-cu8w8vw"/><path class="zjso7bb3z"/></g>`,
		"fallback": "hugeicons:shield-key",
	});
}

export default Component;
