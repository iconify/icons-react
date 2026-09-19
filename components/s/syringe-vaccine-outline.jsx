import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zub42f2bw.css';
import '../../css/d/dcs2u9ork.css';
import '../../css/t/t-xa73ajk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zub42f2bw"/><path class="dcs2u9ork"/><path clip-rule="evenodd" class="t-xa73ajk"/></g>`,
		"fallback": "healthicons:syringe-vaccine-outline",
	});
}

export default Component;
