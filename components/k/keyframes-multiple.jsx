import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cgh6afzdr.css';
import '../../css/w/wr3ilibzg.css';
import '../../css/q/qg6wjyjbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cgh6afzdr"/><path class="wr3ilibzg"/><path class="qg6wjyjbe"/></g>`,
		"fallback": "hugeicons:keyframes-multiple",
	});
}

export default Component;
