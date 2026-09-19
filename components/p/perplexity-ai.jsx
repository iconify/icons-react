import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j3en9kcin.css';
import '../../css/e/etuznobyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j3en9kcin"/><path class="etuznobyf"/></g>`,
		"fallback": "hugeicons:perplexity-ai",
	});
}

export default Component;
