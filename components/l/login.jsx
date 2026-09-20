import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q2vjo1bbe.css';
import '../../css/f/f9q8jbbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q2vjo1bbe"/><path class="f9q8jbbit"/></g>`,
		"fallback": "mynaui:login",
	});
}

export default Component;
