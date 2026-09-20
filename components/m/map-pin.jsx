import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hgq_yhiaf.css';
import '../../css/w/wzxk12bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hgq_yhiaf"/><path class="wzxk12bdj"/></g>`,
		"fallback": "mynaui:map-pin",
	});
}

export default Component;
