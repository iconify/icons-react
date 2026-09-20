import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u9r_f26yz.css';
import '../../css/a/a4fa86ant.css';
import '../../css/h/h55fdbcqv.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u9r_f26yz"/><path class="a4fa86ant"/><path class="h55fdbcqv"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:soft-drink-off",
	});
}

export default Component;
