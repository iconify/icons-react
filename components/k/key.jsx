import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sw9hmmb_d.css';
import '../../css/q/q9jowybli.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sw9hmmb_d"/><circle class="q9jowybli"/></g>`,
		"fallback": "charm:key",
	});
}

export default Component;
