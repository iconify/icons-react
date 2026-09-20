import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tx9t90agw.css';
import '../../css/c/cvmq7ekuv.css';
import '../../css/g/g7qnembxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tx9t90agw"/><path class="cvmq7ekuv"/><path class="g7qnembxy"/></g>`,
		"fallback": "reicon:volume-off",
	});
}

export default Component;
