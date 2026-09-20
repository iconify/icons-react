import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aj4zjch4y.css';
import '../../css/y/y4rimj_9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aj4zjch4y"/><path class="y4rimj_9q"/></g>`,
		"fallback": "streamline-ultimate:scanner",
	});
}

export default Component;
