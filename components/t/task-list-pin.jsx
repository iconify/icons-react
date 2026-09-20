import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bl11n5bwk.css';
import '../../css/e/ex3wh7g8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bl11n5bwk"/><path class="ex3wh7g8q"/></g>`,
		"fallback": "streamline-ultimate:task-list-pin",
	});
}

export default Component;
