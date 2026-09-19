import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g5uq_vbhz.css';
import '../../css/z/ztkbymavw.css';
import '../../css/e/e5s_c9bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g5uq_vbhz"/><path class="ztkbymavw"/><path class="e5s_c9bsl"/></g>`,
		"fallback": "hugeicons:package-03",
	});
}

export default Component;
