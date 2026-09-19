import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hjfawzbxx.css';
import '../../css/h/h4jpboadv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hjfawzbxx"/><path class="h4jpboadv"/></g>`,
		"fallback": "covid:symptoms-virus-loss-smell-1",
	});
}

export default Component;
