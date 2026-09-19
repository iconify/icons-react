import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7_ekj_5u.css';
import '../../css/k/keru-tbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v7_ekj_5u"/><path class="keru-tbzh"/></g>`,
		"fallback": "covid:vaccine-protection-sanitizer-spray",
	});
}

export default Component;
