import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/itwxckbzh.css';
import '../../css/j/jitlzy2ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="itwxckbzh"/><path class="jitlzy2ih"/></g>`,
		"fallback": "hugeicons:logout-circle-01",
	});
}

export default Component;
