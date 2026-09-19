import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eeu2w8bsf.css';
import '../../css/w/w05rmesnj.css';
import '../../css/l/llhjjj3hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eeu2w8bsf"/><path class="w05rmesnj"/><path class="llhjjj3hx"/></g>`,
		"fallback": "covid:virus-lab-research-microscope",
	});
}

export default Component;
