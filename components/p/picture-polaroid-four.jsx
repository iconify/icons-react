import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a4t6zmbrx.css';
import '../../css/u/ubkf94bkd.css';
import '../../css/m/m0ej48bqz.css';
import '../../css/h/hob6-ibvg.css';
import '../../css/i/i59zq5btc.css';
import '../../css/s/s75pj6bkv.css';
import '../../css/t/te7vn8bea.css';
import '../../css/t/tqkk7zbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a4t6zmbrx"/><path class="ubkf94bkd"/><path class="m0ej48bqz"/><path class="hob6-ibvg"/><path class="i59zq5btc"/><path class="s75pj6bkv"/><path class="te7vn8bea"/><path class="tqkk7zbku"/></g>`,
		"fallback": "streamline-freehand-color:picture-polaroid-four",
	});
}

export default Component;
