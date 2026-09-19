import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/umbgadc1w.css';
import '../../css/j/jxia6j9kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="umbgadc1w"/><path class="jxia6j9kw"/></g>`,
		"fallback": "hugeicons:tap-07",
	});
}

export default Component;
