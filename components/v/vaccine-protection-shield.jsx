import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zswfzlb3o.css';
import '../../css/g/g3064rbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zswfzlb3o"/><path class="g3064rbao"/></g>`,
		"fallback": "covid:vaccine-protection-shield",
	});
}

export default Component;
