import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i4-j5lbrm.css';
import '../../css/k/kh7n8zb0n.css';
import '../../css/w/w7fewvy9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i4-j5lbrm"/><path class="kh7n8zb0n"/><path class="w7fewvy9f"/></g>`,
		"fallback": "covid:vaccine-protection-face-mask-3",
	});
}

export default Component;
