import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yopadjb1x.css';
import '../../css/v/v8-8k69fj.css';
import '../../css/d/d2umvjsxg.css';
import '../../css/x/x3nev3ias.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="yopadjb1x"/><path class="v8-8k69fj"/><circle class="d2umvjsxg"/><path class="x3nev3ias"/></g>`,
		"fallback": "hugeicons:square-bottom-dashed-scissors",
	});
}

export default Component;
