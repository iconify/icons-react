import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/ji42yobsw.css';
import '../../css/v/v-10cxbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ji42yobsw"/><path class="v-10cxbfp"/></g>`,
		"fallback": "streamline-ultimate:tablet",
	});
}

export default Component;
