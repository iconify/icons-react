import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b8xq7u-3q.css';
import '../../css/b/brtmzlb7c.css';
import '../../css/q/qd-mihk1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b8xq7u-3q"/><path class="brtmzlb7c"/><path class="qd-mihk1s"/></g>`,
		"fallback": "covid:vaccine-protection-virus",
	});
}

export default Component;
