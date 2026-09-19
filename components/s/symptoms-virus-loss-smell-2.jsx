import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t43qysp_i.css';
import '../../css/k/k7nf8gbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t43qysp_i"/><path class="k7nf8gbbe"/></g>`,
		"fallback": "covid:symptoms-virus-loss-smell-2",
	});
}

export default Component;
