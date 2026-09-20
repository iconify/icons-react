import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rgpbbbb1c.css';
import '../../css/j/j2fajacou.css';
import '../../css/t/tg3ffvmkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rgpbbbb1c"/><path class="j2fajacou"/><path class="tg3ffvmkc"/></g>`,
		"fallback": "solar:paint-brush-line-duotone",
	});
}

export default Component;
